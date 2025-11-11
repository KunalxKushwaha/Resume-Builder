import React from 'react'

const TemplateSelector = ({selectedTemplate, onChange}) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const templates = [
        {
            Id: 'classic',
            name: 'Classic',
            preview:"A Clean, Traditional resume format with clear sections and professional Typography"
        },
        {
            id: 'modern',
            name: 'Modern',
            preview: "Sleek Design with Strategic use of color and modern font choices."


        },
        {
            id: 'minimal',
            name: 'Minimal',
            preview: "Ultra-clean design that puts your content front and center."

        },
        {
            id: 'minimal-image',
            name: 'Minimal with Image',
            preview: "Minimal Design with a single image and clean Typography"

        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default TemplateSelector
