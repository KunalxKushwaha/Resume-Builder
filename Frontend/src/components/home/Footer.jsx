import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-gray-400 py-16 px-6 md:px-16 lg:px-24 xl:px-32 mt-40 overflow-hidden">

        {/* Outer fade-in + slide-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center lg:justify-between gap-10 md:gap-20"
        >

          {/* Left Section */}
          <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
            <motion.a
              href="https://prebuiltui.com"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              <img src="/Logo3.png" alt="logo" className="h-20 w-auto" />
            </motion.a>

            {/* Footer Columns */}
            {[
              {
                title: "Product",
                links: ["Home", "Features", "Testimonials", "CTA"],
              },
              {
                title: "Resources",
                links: ["Company", "Blogs", "Community", "Careers", "About"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms"],
              },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <p className="text-white font-semibold">{col.title}</p>
                <ul className="mt-2 space-y-2">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className="hover:text-indigo-500 transition-all hover:translate-x-[2px] inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <motion.div
            className="flex flex-col max-md:items-center max-md:text-center gap-3 items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-3">
              {[
                { href: "https://kunal-kushwaha.vercel.app/", icon: "dribbble" },
                { href: "https://www.linkedin.com/in/kunal-kushwaha-a25810294", icon: "linkedin" },
                { href: "https://x.com/kunalxkushwaha", icon: "twitter" },
                { href: "https://www.youtube.com/@official.kunal.45", icon: "youtube" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className="hover:text-indigo-500 transition-colors"
                >
                  {/* script-less icons (kept original SVGs) */}
                  {item.icon === "dribbble" && (
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                    </svg>
                  )}
                  {item.icon === "linkedin" && (
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {item.icon === "twitter" && (
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  )}
                  {item.icon === "youtube" && (
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>

            <p className="mt-3 text-center">
              © 2025 <a href="/" className="hover:text-indigo-400">Resumate</a>
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
