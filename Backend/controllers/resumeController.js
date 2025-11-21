import imagekit from "../configs/imagekit.js";
import Resume from "../models/Resume.js";
import fs from "fs"

//controller for creating a new Resume
//POST: /api/resumes/create
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {title} = req.body;

        // Create new Resume
        const newResume = await Resume.create({userId, title})
        //return success message
        return res.status(201).json({message: "Resume created Successfully", resume: newResume})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

//controller for deleting resume
// DELETE: /api/resumes/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

       await Resume.findOneAndDelete({userId, _id: resumeId})

       //Return Success messgae

        return res.status(200).json({message: "Resume deleted Successfully"})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// get user resume by id
// GET: /api/resumes/get

export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume = await Resume.findOne({userId, _id: resumeId})

        if(!resume) {
            return res.status(404).json({message: "Resume not found"})
        }


        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;
        return res.status(200).json({resume})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// get resume by id public
// GET: /api/resumes/public

export const getPublicResumeById = async (req, res) => {

    try {
        const {resumeId} = req.params;
        const resume = await Resume.findOne({public: true, _id: resumeId})

        if(!resume) {
            return res.status(404).json
({message: "Resume not Found"})  

    }

    return res.status(200).json({resume})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

// controller for updating the resume
// PUT: /api/resumes/update

// export const updateResume = async (req,res) => {
//     try {
//         const userId = req.userId;
//         const {resumeId, resumeData, removeBackground} = req.body;
//         const image = req.file;

//         let resumeDataCopy;
//         if(typeof resumeData ==='string'){
//             resumeDataCopy = await JSON.parse(resumeData);
//         }else{
//             resumeDataCopy = structuredClone(resumeData)
//         }

//         if(image) {

//             const imageBufferData = fs.createReadStream(image.path)

//             const response = await imagekit.files.upload({
//   file: imageBufferData,
//   fileName: 'resume.png',
//   folder: 'user-resumes',
//   transformation: {
//     pre: 'w-300,h-300,fo-face,z-0.75' + (removeBackground ? ',e-bgremove': '')
//   } 
// });


//         resumeDataCopy.personal_info.image = response.url


//         }

//         const resume = await Resume.findOneAndUpdate(
//   { userId, _id: resumeId },
//   { $set: resumeDataCopy },
//   { new: true }
// )


//         return res.status(200).json({message: "Saved Successfully", resume})
//     } catch (error) {
//         return res.status(400).json({message: error.message})
//     }
// }
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    // parse resumeData safely
    let resumeDataCopy;
    if (typeof resumeData === 'string') resumeDataCopy = JSON.parse(resumeData);
    else resumeDataCopy = structuredClone(resumeData);

    // Handle file -> upload to ImageKit (supports both disk and memory)
    if (image) {
      let fileStream;
      if (image.path) fileStream = fs.createReadStream(image.path);
      else if (image.buffer) {
        const Stream = require('stream');
        fileStream = new Stream.Readable();
        fileStream._read = () => {};
        fileStream.push(image.buffer);
        fileStream.push(null);
      } else throw new Error("No file buffer/path");

      const response = await imagekit.files.upload({
        file: fileStream,
        fileName: `resume-${Date.now()}.png`,
        folder: 'user-resumes',
        transformation: {
          pre: 'w-300,h-300,fo-face,z-0.75' + (removeBackground ? ',e-bgremove' : '')
        }
      });

      resumeDataCopy.personal_info = resumeDataCopy.personal_info || {};
      resumeDataCopy.personal_info.image = response.url;
    }

    // Merge with existing resume to avoid deleting nested fields
    const existing = await Resume.findOne({ userId, _id: resumeId });
    if (!existing) return res.status(404).json({ message: "Resume not found" });

    const merged = { ...existing.toObject(), ...resumeDataCopy };
    merged.personal_info = { ...(existing.personal_info || {}), ...(resumeDataCopy.personal_info || {}) };

    const updated = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      { $set: merged },
      { new: true }
    );

    return res.status(200).json({ message: "Saved Successfully", resume: updated });
  } catch (error) {
    console.error("updateResume error:", error);
    return res.status(400).json({ message: error.message });
  }
};
