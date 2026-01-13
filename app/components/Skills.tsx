"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Java", "C++", "Python"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "State Management", "Performance Optimization"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Django", "Flask", "REST APIs", "GraphQL", "Redis", "JWT"]
    },
    {
        title: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
        title: "DevOps & Tools",
        skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Firebase", "Unit Testing"]
    },
    {
        title: "CS Fundamentals",
        skills: ["DSA", "OOP", "DBMS", "Operating Systems", "System Design", "Agile"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span></h2>
                    <p className="text-white/60">A comprehensive toolkit for full-stack development.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
                        >
                            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:text-white transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-black/20 text-white/70 border border-white/5 group-hover:border-white/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
