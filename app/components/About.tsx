"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                        <span className="text-sm text-white/70 tracking-widest uppercase">About Me</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                        Building secure, scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">full-stack systems</span>.
                    </h2>
                    <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                        I'm a Computer Science undergraduate with a strong foundation in Full - Stack Development along with AI-ML Integration.
                        I have hands-on experience in delivering real-world systems with role-based access and optimized workflows.
                    </p>
                    <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
                        My focus is on writing clean, maintainable code and solving complex problems.
                    </p>

                    <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-semibold text-white">Education</h3>
                        <div>
                            <p className="text-white/90 font-medium">B.Tech in Computer Science & Engineering</p>
                            <p className="text-white/60">Bhilai Institute of Technology, Durg</p>
                            <div className="flex justify-between items-center mt-2 text-sm text-white/50">
                                <span>CGPA: 9.15</span>
                                <span>2022 – 2026</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors w-full md:w-auto justify-center"
                        >
                            Download Resume
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Visual/Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px]"
                >
                    {/* Abstract Code/Tech visual */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-blue-500/20 rounded-full blur-[80px] md:blur-[100px]" />
                        <div className="relative z-10 p-4 md:p-8 h-full flex flex-col justify-center">
                            <div className="space-y-4 md:space-y-6 font-mono text-xs md:text-sm text-white/60">
                                <div className="p-3 md:p-4 bg-black/40 rounded-lg border border-white/5 overflow-x-auto">
                                    <pre className="whitespace-pre-wrap break-words">
                                        <span className="text-purple-400">const</span> <span className="text-blue-400">me</span> = {"{"} <br />
                                        &nbsp;role: <span className="text-green-400">"FullStack"</span>,<br />
                                        &nbsp;stack: [<span className="text-green-400">"Next"</span>, <span className="text-green-400">"Node"</span>,<span className="text-green-400">"React"</span>,<span className="text-green-400">"TypeScript"</span>],<br />
                                        &nbsp;passion: <span className="text-green-400">"Security"</span>,<span className="text-green-400">"AI-ML"</span>,<span className="text-green-400">"DSA"</span><br />
                                        {"}"};
                                    </pre>
                                </div>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="p-3 md:p-4 bg-black/40 rounded-lg border border-white/5 text-center">
                                        <span className="block text-2xl md:text-3xl font-bold text-white mb-1">3+</span>
                                        <span className="text-[10px] md:text-xs uppercase tracking-wider">Internships</span>
                                    </div>
                                    <div className="p-3 md:p-4 bg-black/40 rounded-lg border border-white/5 text-center">
                                        <span className="block text-2xl md:text-3xl font-bold text-white mb-1">10+</span>
                                        <span className="text-[10px] md:text-xs uppercase tracking-wider">Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
