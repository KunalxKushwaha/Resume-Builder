// import React, { useEffect, useState } from 'react'
// import { FilePenLineIcon, LoaderCircle, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
// import { useNavigate } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import api from '../configs/api'
// import toast from 'react-hot-toast';
// import pdfToText from 'react-pdftotext'
  
// const Dashboard = () => {

//   const {user, token} = useSelector(state => state.auth)

//   const colors = ['#9333ea','#d97706','#dc2626','#0284c7','#16a34a']
//   const [allResumes, setAllResumes] = React.useState([])
//   const [showCreateResume, setShowCreateResume] = React.useState(false)
//   const [showUploadResume, setShowUploadResume] = React.useState(false)
//   const [title, setTitle] = React.useState('')
//   const [resume, setResume] = React.useState(null)
//   const [editResumeId, setEditResumeId] = React.useState(false)
//  const [isLoading, setIsLoading] = useState(false)

//   const navigate = useNavigate()



//   const LoadAllResumes = async () => {
//     try {
//       const {data} = await api.get('/api/users/resumes', {headers: {
//         Authorization: token
//       }})
//       setAllResumes(data.resumes)
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message)
//     }
//   }

//   const createResume = async (e) => {
//     // e.preventDefault()
//     // setShowCreateResume(false)
//     // navigate(`/app/builder/res123`)
//     try {
//       e.preventDefault()
//       const {data} = await api.post('/api/resumes/create', {title}, {headers: {
//         Authorization: token
//       }})
//       setAllResumes([...allResumes, data.resume])
//       setTitle('')
//       setShowCreateResume(false)
//       navigate(`/app/builder/${data.resume._id}`)
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message)
//     }
//   }

//   const uploadResume = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       const resumeText = await pdfToText(resume)
//       const {data} = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers: {
//         Authorization: token
//       }})
//       setTitle('')
//       setResume(null)
//       setShowUploadResume(false)
//       navigate(`/app/builder/${data.resumeId}`)
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message)
//     }
//     setIsLoading(false)
//   }

//   const editTitle = async (e) => {
//     try {
//        e.preventDefault()
//        const {data} = await api.put(`/api/resumes/update`, {resumeId: editResumeId, resumeData: {title}}, {headers: {
//         Authorization: token
//       }})
//       setAllResumes(allResumes.map(resume => resume._id === editResumeId ? {...resume, title}: resume))
//       setTitle('')
//       setEditResumeId('')
//       toast.success(data.message)
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message)
//     }
   
//   }

//   const DeleteResume = async (resumeId) => {
//   try {
//      const confirm = window.confirm("Are you sure you want to delete this resume?")
//    if(confirm) {
//     const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers: {
//         Authorization: token
//       }})
//       setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
//       toast.success(data.message)
    
//    }
//   } catch (error) {
//      toast.error(error?.response?.data?.message || error.message)
//   }
//   }


//   useEffect(() => {
//     LoadAllResumes()
//   },[])

  
//   return (
//     <div>
//       <div className='max-w-7xl mx-auto px-4 py-8'>
//         <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, Kunal</p>
//         <div className='flex gap-4'>
         
//           <button onClick={()=> setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transtion-all duration-300 cursor-pointer'>
//              <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full'/>
//              <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>

             
//           </button>

//           <button onClick={()=> setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transtion-all duration-300 cursor-pointer'>
//              <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full'/>
//              <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>

             
//           </button>
//         </div>

//         <hr className='border-slate-300 my-6 sm:w-[305px]'/>

//         <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
//           {allResumes.map((resume, index) => {
//             const baseColor = colors[index % colors.length];
//             return(
//               <button onClick={()=> navigate(`/app/builder/${resume._id}`)} key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor + '40'}}>
//                 <FilePenLineIcon className='sixe-7 group-hover:scale-105 transition-all' style={{color: baseColor}} />
//                 <p className='text-sm group-hover:scale-105 transition-all px-2 text-color' style={{color: baseColor}}>{resume.title}</p>
//                 <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-color' style={{color: baseColor + '90'}}>
//                   Updated on {new Date(resume.updatedAt).toLocaleDateString()}
//                 </p>

//                 <div onClick={e=> e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
//                   <TrashIcon onClick={()=> DeleteResume(resume._id)} className='sixe-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
//                   <PencilIcon onClick={()=> {setEditResumeId(resume._id); setTitle(resume.title)}} className='sixe-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'/>

//                 </div>
//               </button>
//             )
//           })}

//         </div>

//        {
//         showCreateResume && (
//           <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//             <div className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=> e.stopPropagation()}>
//               <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
//               <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-puprle-600 ring-purple-600' required/>
//               <button className='w-full py-2 bg-purple-600 text-white rounded hover:bg-puprle-700 transition-colors'>Create Resume</button>
//               <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {
//                 setShowCreateResume(false); setTitle('')
//               }}/>
//             </div>
//           </form>
//         )
//        }

//        {
//         showUploadResume && (
//            <form onSubmit={uploadResume} onClick={()=> setShowUploadResume(false)} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//             <div className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=> e.stopPropagation()}>
//               <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
//               <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-puprle-600 ring-purple-600' required/>


//               <div className=''>
//                 <label htmlFor="resume-input" className='block text-sm text-slate-700'>
//                   Select Resume File
//                   <div className='flex flex-col items-center justify-center gap-2 border-group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-purple-500 hover:text-purple-700 cursor-pointer transition-colors'>

//                     {resume? (
//                       <p className='text-purple-700'>{resume.name}</p>
//                     ): (
//                       <>
//                       <UploadCloud className='size-14 stroke-1' />

//                       <p>Upload Resume</p>
//                       </>
//                     )}

//                   </div>
//                 </label>
//                 <input type="file" id='resume-input' accept='.pdf'hidden onChange={(e)=> setResume(e.target.files[0])} />

//               </div>

//               <button disabled={isLoading} className='w-full py-2 bg-purple-600 text-white rounded hover:bg-puprle-700 transition-colors flex items-center justify-center gap-2'>
//                 {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white '/>}
//                 {isLoading ? 'Uploading...': 'Upload Resume'}
                
//                 </button>
//               <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {
//                 setShowUploadResume(false); setTitle('')
//               }}/>
//             </div>
//           </form>
          
//         )
//        }

//          {
//         editResumeId && (
//           <form onSubmit={editTitle} onClick={()=> setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
//             <div className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=> e.stopPropagation()}>
//               <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
//               <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-puprle-600 ring-purple-600' required/>
//               <button className='w-full py-2 bg-purple-600 text-white rounded hover:bg-puprle-700 transition-colors'>Update</button>
//               <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={()=> {
//                 setEditResumeId(''); setTitle('')
//               }}/>
//             </div>
//           </form>
//         )
//        }

//       </div>
//     </div>
//   )
// }

// export default Dashboard

// Dashboard.jsx
import React, { useEffect, useState } from 'react'
import {
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  XIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast';
import pdfToText from 'react-pdftotext'
import { motion, AnimatePresence } from 'framer-motion'

const Dashboard = () => {
  const { user, token } = useSelector(state => state.auth)

  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']
  const [allResumes, setAllResumes] = React.useState([])
  const [showCreateResume, setShowCreateResume] = React.useState(false)
  const [showUploadResume, setShowUploadResume] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [resume, setResume] = React.useState(null)
  const [editResumeId, setEditResumeId] = React.useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const LoadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', {
        headers: {
          Authorization: token
        }
      })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (e) => {
    try {
      e.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, {
        headers: {
          Authorization: token
        }
      })
      setAllResumes([...allResumes, data.resume])
      setTitle('')
      setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // pdfToText usage kept as in your original code
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, {
        headers: {
          Authorization: token
        }
      })
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (e) => {
    try {
      e.preventDefault()
      const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, {
        headers: {
          Authorization: token
        }
      })
      setAllResumes(allResumes.map(r => r._id === editResumeId ? { ...r, title } : r))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const DeleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this resume?")
      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
          headers: {
            Authorization: token
          }
        })
        setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    LoadAllResumes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Framer variants for the glassmorphism rise modal (B4)
  const backdropVariant = {
    hidden: { opacity: 0, transition: { duration: 0.18 } },
    visible: { opacity: 1, transition: { duration: 0.28 } },
    exit: { opacity: 0, transition: { duration: 0.18 } }
  }

  const modalVariant = {
    hidden: {
      opacity: 0,
      scale: 0.96,
      y: 12,
      backdropFilter: 'blur(0px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      backdropFilter: 'blur(6px)',
      transition: {
        type: 'spring',
        stiffness: 380,
        damping: 28,
        mass: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: 8,
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.18 }
    }
  }

  const buttonTap = { scale: 0.98 }
  const buttonHover = { scale: 1.03 }

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome, {user?.name || 'User'}</p>

        <div className='flex gap-4'>
          <motion.button
            onClick={() => setShowCreateResume(true)}
            whileTap={buttonTap}
            whileHover={buttonHover}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            <motion.div whileTap={{ scale: 0.95 }} className=''>
              <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            </motion.div>
            <p className='text-sm group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
          </motion.button>

          <motion.button
            onClick={() => setShowUploadResume(true)}
            whileTap={buttonTap}
            whileHover={buttonHover}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <UploadCloud className='size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full' />
            </motion.div>
            <p className='text-sm group-hover:text-purple-600 transition-all duration-300'>Upload Existing</p>
          </motion.button>
        </div>

        <hr className='border-slate-300 my-6 sm:w-[305px]' />

        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {allResumes.map((resumeObj, index) => {
            const baseColor = colors[index % colors.length]
            return (
              <motion.button
                key={resumeObj._id}
                onClick={() => navigate(`/app/builder/${resumeObj._id}`)}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0,0,0,0.09)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer'
                style={{ background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor + '40' }}
              >
                <FilePenLineIcon className='sixe-7 group-hover:scale-105 transition-all' style={{ color: baseColor }} />
                <p className='text-sm group-hover:scale-105 transition-all px-2 text-color' style={{ color: baseColor }}>{resumeObj.title}</p>
                <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-color' style={{ color: baseColor + '90' }}>
                  Updated on {new Date(resumeObj.updatedAt).toLocaleDateString()}
                </p>

                <div onClick={e => e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                  <motion.div
                    whileTap={{ scale: 0.86 }}
                    whileHover={{ rotate: [-6, 6, -3, 0], transition: { duration: 0.45 } }}
                    className='inline-block'
                  >
                    <TrashIcon onClick={() => DeleteResume(resumeObj._id)} className='sixe-7 p-1.5 rounded text-slate-700' />
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.92 }} className='inline-block'>
                    <PencilIcon onClick={() => { setEditResumeId(resumeObj._id); setTitle(resumeObj.title) }} className='sixe-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors' />
                  </motion.div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Create Resume Modal */}
        <AnimatePresence>
          {showCreateResume && (
            <motion.form
              onSubmit={createResume}
              onClick={() => setShowCreateResume(false)}
              className='fixed inset-0 z-50 flex items-center justify-center'
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariant}
              style={{ display: 'flex' }}
            >
              {/* backdrop - animate background opacity */}
              <motion.div
                className='absolute inset-0 bg-black/50'
                variants={backdropVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              {/* modal content - glassmorphism rise */}
              <motion.div
                onClick={e => e.stopPropagation()}
                className='relative bg-white/40 border border-white/20 rounded-2xl shadow-lg w-full max-w-sm p-6 backdrop-blur-md'
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  // ensure browsers support backdropFilter; framer animates the CSS property when possible
                  WebkitBackdropFilter: 'blur(6px)',
                  backdropFilter: 'blur(6px)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.28))'
                }}
              >
                <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400' required />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'
                >
                  Create Resume
                </motion.button>
                <XIcon className='absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors' onClick={() => { setShowCreateResume(false); setTitle('') }} />
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Upload Resume Modal */}
        <AnimatePresence>
          {showUploadResume && (
            <motion.form
              onSubmit={uploadResume}
              onClick={() => setShowUploadResume(false)}
              className='fixed inset-0 z-50 flex items-center justify-center'
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariant}
            >
              <motion.div className='absolute inset-0 bg-black/50' variants={backdropVariant} initial="hidden" animate="visible" exit="exit" />

              <motion.div
                onClick={e => e.stopPropagation()}
                className='relative bg-white/40 border border-white/20 rounded-2xl shadow-lg w-full max-w-sm p-6 backdrop-blur-md'
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  WebkitBackdropFilter: 'blur(6px)',
                  backdropFilter: 'blur(6px)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.28))'
                }}
              >
                <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400' required />

                <div>
                  <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                    Select Resume File
                    <div className='flex flex-col items-center justify-center gap-2 border text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-purple-500 hover:text-purple-700 cursor-pointer transition-colors'>
                      {resume ? (
                        <p className='text-purple-700'>{resume.name}</p>
                      ) : (
                        <>
                          <UploadCloud className='size-14 stroke-1' />
                          <p>Upload Resume</p>
                        </>
                      )}
                    </div>
                  </label>
                  <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
                </div>

                <motion.button
                  disabled={isLoading}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-2 bg-purple-600 mt-2 text-white rounded hover:bg-purple-700 transition-colors flex items-center justify-center gap-2'
                >
                  {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white' />}
                  {isLoading ? 'Uploading...' : 'Upload Resume'}
                </motion.button>

                <XIcon className='absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors' onClick={() => { setShowUploadResume(false); setTitle('') }} />
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Edit Title Modal */}
        <AnimatePresence>
          {editResumeId && (
            <motion.form
              onSubmit={editTitle}
              onClick={() => setEditResumeId('')}
              className='fixed inset-0 z-50 flex items-center justify-center'
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariant}
            >
              <motion.div className='absolute inset-0 bg-black/50' variants={backdropVariant} initial="hidden" animate="visible" exit="exit" />

              <motion.div
                onClick={e => e.stopPropagation()}
                className='relative bg-white/40 border border-white/20 rounded-2xl shadow-lg w-full max-w-sm p-6 backdrop-blur-md'
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  WebkitBackdropFilter: 'blur(6px)',
                  backdropFilter: 'blur(6px)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.28))'
                }}
              >
                <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400' required />
                <motion.button whileTap={{ scale: 0.98 }} className='w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'>Update</motion.button>
                <XIcon className='absolute top-4 right-4 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors' onClick={() => { setEditResumeId(''); setTitle('') }} />
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Dashboard