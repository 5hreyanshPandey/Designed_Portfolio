"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Web Link Hub",
        tags: ["TypeScript", "React", "Node.js"],
        description: "Centralized platform to manage and categorize web links.",
        link: "https://github.com/5hreyanshPandey/WebLinkHub"
    },
    {
        title: "IP Management System",
        tags: ["MERN", "Security", "RBAC"],
        description: "Secure role-based portal for NIC employees.",
        link: "https://github.com/5hreyanshPandey/National_Informatics_Centre_Portal"
    },
    {
        title: "Stack Underflow",
        tags: ["Advanced", "GraphQL", "MERN"],
        description: "Scalable Q&A platform with dynamic contents.",
        link: "https://github.com/5hreyanshPandey/Stack_Underflow_Site"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative z-20 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Work</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-white/70 mb-6">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-medium hover:underline">
                                View Project &rarr;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
