// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

import Resume from "../models/Resume.js";

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const {userContent} = req.body;

        if(!userContent) {
            return res.status(400).json({message: "Missing Required Fields"})
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
    messages: [
        { role: "system", content: "You are an Expert in resume Writing. Your task is to enhance the professional summary of a resume.The Summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-Friendly. and only return text no options or anything else."},
        {
            role: "user",
            content: userContent,
        },
    ],
        })

        const enhancedContent = response.choices[0].message.content;

        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}

// Controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
    try {
        const {userContent} = req.body;

        if(!userContent) {
            return res.status(400).json({message: "Missing Required Fields"})
        }

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
    messages: [
        { role: "system", content: "You are an Expert in resume Writing. Your task is to enhance the Job Description of a resume.The Job Description should be only in 1-2 sentences also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no options or anything else."},
        {
            role: "user",
            content: userContent,
        },
    ],
        })

        const enhancedContent = response.choices[0].message.content;

        return res.status(200).json({enhancedContent})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}

/// controller for uploading a resume to the databse
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
    try {
        const {resumeText, title} = req.body;
        const userId = req.userId;

        if(!resumeText) {
            return res.status(400).json({messgae: "Missing required fields."})
        }

        const systemPrompt = 'You are an expert AI Agent to extract data from resume.'
        const userPrompt = `extract data from this resume: ${resumeText} 
        
        provide data in the following JSON format with no additional text before or after: 
        
        `

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
    messages: [
        { role: "system", content:systemPrompt },
        {
            role: "user",
            content: userPrompt,
        },
    ],
    response_format: {type: 'json_object'}
        })

        const extractedData = response.choices[0].message.content;
        const parsedData = JSON.parse(extractedData)
        const  newResume = await Resume.create({userId, title, ...parsedData})

        res.json({resumeId: newResume._id})
    } catch (error) {
        return res.status(400).json({message: error.message})
    }

}