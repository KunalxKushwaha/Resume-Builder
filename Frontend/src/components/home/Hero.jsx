// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Hero = () => {

//     const {user} = useSelector(state => state.auth)
//      const [menuOpen, setMenuOpen] = React.useState(false);

//     const logos = [
//         'https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg',
//         'https://saasly.prebuiltui.com/assets/companies-logo/framer.svg',
//         'https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg',
//         'https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg',
//         'https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg',
//     ]
//       return (
//         <>
//             <div className="min-h-screen pb-20">
//                 {/* Navbar */}
//                 <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
//                     <a href="https://prebuiltui.com">
//                         <img src="/Logo3.png" alt="logo" className='h-25 w-auto' />
//                     </a>

//                     <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
//                         <a href="#" className="hover:text-indigo-600 transition">Home</a>
//                         <a href="#features" className="hover:text-indigo-600 transition">Features</a>
//                         <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
//                         <a href="#cta" className="hover:text-indigo-600 transition">Contact</a>
//                     </div>

//                     <div className="flex gap-2">
//                         <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white" hidden= {user}>
//                             Get started
//                         </Link>
//                         <Link to='/app?state=login' className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" hidden= {user} >
//                             Login
//                         </Link>

//                         <Link to='/app' className='hidden md:block px-8 py-2 bg-pink-500 hover:bg-pink-600 active:scale-95 transitions-all rounded-full text-white' hidden={!user}>
//                         Dashboard</Link>
//                     </div>

//                     <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
//                         <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
//                             <path d="M4 5h16M4 12h16M4 19h16" />
//                         </svg>
//                     </button>
//                 </nav>

//                 {/* Mobile Menu */}
//                 <div className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
//                     <a href="#" className="text-white">Home</a>
//                     <a href="#features" className="text-white">Features</a>
//                     <a href="#testimonials" className="text-white">Testimonials</a>
//                     <a href="#contact" className="text-white">Contact</a>
//                     <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex" >
//                         X
//                     </button>
//                 </div>

//                 {/* Hero Section */}
//                 <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
//                     <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>

//                     {/* Avatars + Stars */}
//                     <div className="flex items-center mt-24">
//                         <div className="flex -space-x-3 pr-3">
//                             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-1" />
//                             <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2" />
//                             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-3" />
//                             <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-4" />
//                             <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user5" className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-5" />
//                         </div>

//                         <div>
//                             <div className="flex ">
//                                 {Array(5).fill(0).map((_, i) => (
//                                     <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-indigo-600" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
//                                 ))}
//                             </div>
//                             <p className="text-sm text-gray-700">
//                                 Used by 10,000+ users
//                             </p>
//                         </div>
//                     </div>

//                     {/* Headline + CTA */}
//                     <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
//                         Land Your Dream Job with <span className=" bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">AI-powered </span> Resumes.
//                     </h1>

//                     <p className="max-w-md text-center text-base my-7">Create, edit and download proffesional Resumes with AI powered assistance.</p>

//                     {/* CTA Buttons */}
//                     <div className="flex items-center gap-4 ">
//                         <Link to="/app" className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors">
//                             Get started
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                         </Link>
//                         <button className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
//                             <span>Try demo</span>
//                         </button>
//                     </div>

//                     <p className="py-6 text-slate-600 mt-14">Trusting by leading brands, including</p>

//                     <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
//                         {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-6 w-auto max-w-xs" />)}
//                     </div>
//                 </div>
//             </div>
//             <style>
//                 {`
//                     @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

//                     * {
//                         font-family: 'Poppins', sans-serif;
//                     }
//                 `}
//             </style>
//         </>
//     );
// }

// export default Hero
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <>
      <div className="min-h-screen pb-20 overflow-hidden">
        {/* NAVBAR */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm"
        >
          <a href="/">
            <motion.img
              src="/Logo3.png"
              alt="logo"
              className="h-25 w-auto"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-slate-800">
            {["Home", "Features", "Testimonials", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
              hidden={user}
            >
              Get started
            </Link>

            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border rounded-full hover:bg-slate-50 transition-all text-slate-700"
              hidden={user}
            >
              Login
            </Link>

            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-pink-500 hover:bg-pink-600 active:scale-95 transition-all rounded-full text-white"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </motion.nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center text-lg gap-8 md:hidden"
            >
              {["Home", "Features", "Testimonials", "Contact"].map((item, i) => (
                <motion.a
                  key={i}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white text-xl"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="size-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center justify-center"
              >
                X
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">

          {/* background glow animation */}
          <motion.div
            className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-[32rem] bg-indigo-300 blur-[100px] opacity-30"
            animate={{ opacity: [0.2, 0.35, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Avatars + Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mt-24"
          >
            {/* Floating avatars */}
            <div className="flex -space-x-3 pr-3">
              {[1, 2, 3, 4, 5].map((num, i) => (
                <motion.img
                  key={i}
                  src={
                    num === 5
                      ? "https://randomuser.me/api/portraits/men/75.jpg"
                      : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                  }
                  className="size-8 rounded-full border-2 border-white object-cover"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              ))}
            </div>

            {/* Stars + Text */}
          <div className="ml-3 flex flex-col leading-tight">
  <div className="flex gap-1">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1 * i,
            type: "spring",
            stiffness: 250,
          }}
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="lucide lucide-star text-transparent fill-indigo-600"
        >
          <path d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z" />
        </motion.svg>
      ))}
  </div>

  <p className="text-sm text-gray-700">
    Used by 10,000+ users
  </p>
</div>

          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]"
          >
            Land Your Dream Job with{" "}
            <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
              AI-powered
            </span>{" "}
            Resumes.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="max-w-md text-center text-base my-7"
          >
            Create, edit and download professional Resumes with AI powered
            assistance.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <Link
              to="/app"
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 ring-1 ring-indigo-400 flex items-center transition-all"
            >
              Get started
            </Link>

            <button className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="lucide lucide-video size-5"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>Try demo</span>
            </button>
          </motion.div>

          {/* BRANDS */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="py-6 text-slate-600 mt-14"
          >
            Trusted by leading brands, including
          </motion.p>

          {/* Logos with stagger reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4"
          >
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                className="h-6 w-auto opacity-80 hover:opacity-100 transition"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Global Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
