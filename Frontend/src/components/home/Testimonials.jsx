import React from 'react'
import { BookUserIcon, Zap } from 'lucide-react';
import Title from './Title';

const Testimonials = () => {
  return (
    <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12'>
         <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
            <BookUserIcon className='size-4.5 stroke-blue-600'/>
            <span>Testimonials</span>
        </div>
        <Title title="Don't just take our Words" description="Hear what our users says about Us. We're Always Looking for ways to improve. If you have a positive experience with us, please let us know! by leaving your valuable Review." />
      
    </div>
  )
}

export default Testimonials
