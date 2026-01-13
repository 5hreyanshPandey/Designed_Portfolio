"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "National Informatics Centre (NIC)",
        role: "Software Development Intern",
        period: "May 2025 – July 2025",
        type: "Hybrid",
        description: [
            "Designed and deployed a secure MERN-based IP Management Portal for 200+ employees.",
            "Implemented role-based authentication, CAPTCHA, and OTP verification, improving security by 35%.",
            "Optimized data workflows for IP allocation and complaints, reducing manual processing time by 60%.",
            "Utilized Docker and Git-based workflows across SDLC phases for streamlined deployment and version control."
        ]
    },
    {
        company: "South Eastern Coalfields Limited (SECL)",
        role: "Software Development Intern",
        period: "July 2025 – August 2025",
        type: "On-Site",
        description: [
            "Built a MERN-based land clubbing & employment eligibility system for operational automation.",
            "Automated job eligibility logic and integrated dynamic modals for employee data, cutting validation time by 70%.",
            "Improved data accuracy by 30% and ensured scalability for 1,000+ records."
        ]
    },
    {
        company: "The Sparks Foundation",
        role: "Web Development Intern",
        period: "June 2024 – July 2024",
        type: "Remote",
        description: [
            "Developed a banking web app using Django and SQLite supporting login, fund transfer, and transaction tracking.",
            "Enhanced database performance with query optimization, achieving 25% faster load times."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span></h2>
                    <div className="w-20 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="text-sm font-mono text-white/50">{exp.period}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-sm">
                                <span className="text-blue-300 font-medium">{exp.company}</span>
                                <span className="w-1 h-1 bg-white/30 rounded-full" />
                                <span className="text-white/50">{exp.type}</span>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-white/70 text-sm leading-relaxed flex items-start gap-2">
                                        <span className="mt-1.5 w-1 h-1 bg-white/30 rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
