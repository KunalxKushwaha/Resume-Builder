import React from 'react'
import { Palette } from 'lucide-react';

const ColorPicker = ({selectedColor, onChange}) => {
    const colors = [
        {name: 'Blue', value: '#3B82F6'},
        {name: 'Red', value: '#EF4444'},
        {name: 'Green', value: '#10B981'},
        {name: 'Purple', value: '#8B5CF6'},
        {name: 'Orange', value: '#F59E0B'},
        {name: 'Teal', value: '#14B8A6'},
        {name: 'Pink', value: '#EC4899'},
        {name: 'Yellow', value: '#EAB308'},
        {name: 'Gray', value: '#6B7280'},
        {name: 'Black', value: '#000000'},
        {name: 'Indigo', value: '#6366F1'},
        {name: 'Cyan', value: '#06B6D4'},
    ]

    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='relative'>
        <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-ssm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg'>
            <Palette size={16}/> <span className='max-sm:hidden'>Accent</span>
        </button>

        {
            isOpen && (
                <div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 mt-2 p-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
                    {colors}

                </div>
            )
        }
      
    </div>
  )
}

export default ColorPicker
