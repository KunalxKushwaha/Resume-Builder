import React from 'react'

const ResumeBuilder = () => {

  const [resumeData, setResumeData] = React.useState({
    _id: '',
    title: '',
    personal_info: {},
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: '#3B82F6',
    public: false,



  })
  return (
    <div>
      
    </div>
  )
}

export default ResumeBuilder
