"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.4, 0.8], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none h-[500vh]">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="sticky top-1/2 -translate-y-1/2 w-full text-center px-4"
            >
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">
                    SHREYANSH <span className="text-white/40">PANDEY</span>
                </h1>
                <p className="text-xl md:text-3xl font-light text-white/80 tracking-wide">
                    Creative Developer
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-[-20vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-sm uppercase tracking-widest text-white/50">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="sticky top-1/2 -translate-y-1/2 w-full px-4 md:px-20 text-left"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl">
                    I build immersive <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">digital experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="sticky top-1/2 -translate-y-1/2 w-full px-4 md:px-20 text-right flex flex-col items-end"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl">
                    Bridging design <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">and engineering.</span> 
                </h2>
            </motion.div>
        </div>
    );
}
