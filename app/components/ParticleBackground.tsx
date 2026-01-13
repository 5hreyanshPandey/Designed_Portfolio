"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: {
            x: number;
            y: number;
            baseY: number; // Store original Y for parallax calculation
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            color: string;
        }[] = [];

        let animationFrameId: number;
        let scrollY = 0;

        const colors = ["rgba(255, 255, 255,", "rgba(59, 130, 246,", "rgba(168, 85, 247,"]; // White, Blue, Purple

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = Math.floor(window.innerWidth / 15); // More particles
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x: x,
                    y: y,
                    baseY: y, // Initial Y position
                    size: Math.random() * 2.5 + 0.5, // Varied sizes
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.4 + 0.1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate parallax offset based on scroll
            // We want particles to move slightly faster or slower than scroll to create depth
            const parallaxFactor = 0.2;

            particles.forEach((p) => {
                ctx.beginPath();

                // Parallax logic: shift Y based on scrollY
                // Since canvas is fixed, we simulate movement.
                // Moving UP as we scroll DOWN (negative offset) makes them feel like they are in the background.
                const scrollOffset = scrollY * parallaxFactor * p.size * 0.2;
                let currentY = (p.baseY - scrollOffset + p.y) % canvas.height;
                if (currentY < 0) currentY += canvas.height;

                // Add subtle movement
                p.x += p.speedX;
                p.baseY += p.speedY; // Apply natural drift to base Y

                // Wrap horizontal
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;

                ctx.arc(p.x, currentY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color} ${p.opacity})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener("resize", () => {
            resizeCanvas();
            createParticles();
        });
        window.addEventListener("scroll", handleScroll);

        resizeCanvas();
        createParticles();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
