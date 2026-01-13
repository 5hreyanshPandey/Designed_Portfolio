"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <footer id="contact" className="relative py-12 bg-black overflow-hidden border-t border-white/10">
            {/* Smooth visual transition at the top */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50 pointer-events-none" />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent">
                        LET'S TALK
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 font-light">
                        Have an idea? Creating something unique? <br />
                        Or just want to chat about tech? I'm all ears.
                    </p>

                    <motion.a
                        href="mailto:shreyanshpandey2003@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-bold rounded-full shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] transition-all"
                    >
                        Start a Conversation
                    </motion.a>
                </motion.div>

                {/* Footer Links Grid */}
                <div className="w-full border-t border-white/5 pt-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                    <div>
                        <a href="#" className="text-xl font-bold tracking-tighter text-white block mb-4">
                            SHREYANSH<span className="text-white/50">.DEV</span>
                        </a>
                        <p className="text-white/40 text-xs leading-relaxed">
                            Crafting digital experiences with code and passion.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
                        <ul className="space-y-2 text-white/60 text-xs">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Work</a></li>
                            <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
                        <ul className="space-y-2 text-white/60 text-xs">
                            <li><a href="https://linkedin.com/in/shreyansh-pandey-448564255" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                            <li><a href="https://github.com/5hreyanshPandey" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                            <li><a href="https://leetcode.com/5hreyanshPandey" className="hover:text-blue-400 transition-colors">LeetCode</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
                        <ul className="space-y-2 text-white/60 text-xs">
                            <li><a href="mailto:shreyanshpandey2003@gmail.com" className="hover:text-blue-400 transition-colors">shreyanshpandey2003@gmail.com</a></li>
                            <li><a href="tel:+918770967955" className="hover:text-blue-400 transition-colors">+91 8770967955</a></li>
                            <li>Bhilai, Chhattisgarh, India</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mt-12 flex justify-between items-center text-[10px] text-white/20">
                    <p>© {new Date().getFullYear()} Shreyansh Pandey</p>
                    <p>Designed & Built with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
