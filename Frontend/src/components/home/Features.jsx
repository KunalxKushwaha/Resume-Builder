// import React from 'react'
// import { Zap } from 'lucide-react';
// import Title from './Title';

// const Features = () => {
//     const [isHover, setIsHover] = React.useState(false);
//   return (
    
//     <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>

//         <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
//             <Zap width={14}/>
//             <span>Simple Process</span>
//         </div>
//         <Title title='Build Your Resume' description='Our Streamlined Process helps you create a professional resume in minutes with intelligent AI-powered tools and features.'/>

//     <div className="flex flex-col md:flex-row items-center justify-center xl-mt-10">
//                 <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
//                 <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
//                     <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
//                         <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Real-Time Analytics</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">Get instant insights into your finances with live dashboards.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
//                         <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Bank-Grade Security</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">End-to-end encryption, 2FA, compliance with GDPR standards.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
//                         <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
//                             <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
//                             <div className="space-y-2">
//                                 <h3 className="text-base font-semibold text-slate-700">Customizable Reports</h3>
//                                 <p className="text-sm text-slate-600 max-w-xs">Export professional, audit-ready financial reports for tax or internal review.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
//                 * {
//                     font-family: 'Poppins', sans-serif;
//                 }
//             `}</style>
      
//     </div>
//   )
// }

// export default Features

import React from "react";
import { Zap } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Title from "./Title";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.25,
    },
  },
};

const Features = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  const [isHover, setIsHover] = React.useState(false);

  return (
    <div
      id="features"
      ref={ref}
      className="flex flex-col items-center my-20 scroll-mt-12"
    >
      {/* Badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        className="flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 
        border border-indigo-200 rounded-full px-6 py-1.5"
      >
        <Zap width={14} />
        <span>Simple Process</span>
      </motion.div>

      {/* Section Title */}
      <motion.div variants={fadeUp} initial="hidden" animate={controls}>
        <Title
          title="Build Your Resume"
          description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
        />
      </motion.div>

      {/* Features Row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="flex flex-col md:flex-row items-center justify-center xl-mt-10 mt-6"
      >
        {/* LEFT IMAGE */}
        <motion.img
          variants={fadeUp}
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt=""
          className="max-w-2xl w-full xl:-ml-32"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />

        {/* RIGHT CONTENT */}
        <div
          className="px-4 md:px-0 space-y-6"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* CARD #1 */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.03 }}>
            <div
              className={`p-6 group flex gap-4 rounded-xl transition-all cursor-pointer shadow-sm 
                ${!isHover ? "border-violet-300 bg-violet-100" : "border border-transparent group-hover:bg-violet-100 group-hover:border-violet-300"}
              `}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="size-6 stroke-violet-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get instant insights into your finances with live dashboards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD #2 */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.03 }}>
            <div className="p-6 flex gap-4 rounded-xl transition-all border border-transparent group-hover:bg-green-100 group-hover:border-green-300 shadow-sm cursor-pointer">
              <svg
                width="24"
                height="24"
                className="size-6 stroke-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Bank-Grade Security
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  End-to-end encryption, 2FA, compliance with GDPR standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD #3 */}
          <motion.div variants={fadeUp} whileHover={{ scale: 1.03 }}>
            <div className="p-6 flex gap-4 rounded-xl transition-all border border-transparent group-hover:bg-orange-100 group-hover:border-orange-300 shadow-sm cursor-pointer">
              <svg
                className="size-6 stroke-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Customizable Reports
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Export professional, audit-ready financial reports.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
