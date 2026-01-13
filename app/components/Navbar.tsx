"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-transparent ${scrolled
                ? "bg-black/50 backdrop-blur-xl border-white/5 py-3 shadow-lg shadow-black/20"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[101]">
                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tighter text-white z-[102] relative">
                    SHREYANSH<span className="text-white/50">.DEV</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[102] relative p-2 text-white"
                >
                    <div className="flex flex-col gap-1.5 items-end">
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-4 h-0.5 bg-white block"
                        />
                        <motion.span
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                            className="w-6 h-0.5 bg-white block"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#121212] z-[90] flex flex-col items-center justify-center gap-8 md:hidden h-screen w-screen"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-light text-white/90 hover:text-white"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
