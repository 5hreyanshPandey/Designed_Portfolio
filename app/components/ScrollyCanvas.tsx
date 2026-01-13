"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 150;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          const src = `/sequence/${i.toString().padStart(3, "0")}.png`;
          img.src = src;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = (e) => {
            console.error(`Failed to load image ${src}`, e);
            resolve(); // Resolve anyway to avoid hanging
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Responsive Canvas Sizing & Drawing logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = images[index];

    if (!canvas || !ctx || !img) return;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Scale context for DPI
    ctx.scale(dpr, dpr);
    
    // Object-fit: cover logic
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Render on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render after load
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded]);

  // Handle Resize
  useEffect(() => {
     const handleResize = () => {
         if (isLoaded) {
             // Re-render current frame based on scroll position
             const currentScroll = scrollYProgress.get();
             const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentScroll * FRAME_COUNT));
             renderFrame(frameIndex);
         }
     }
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, scrollYProgress]);

  return (
    <div className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: "100%", height: "100%" }}
        />
        {!isLoaded && (
             <div className="absolute inset-0 flex items-center justify-center text-white/50">
                 Loading Experience...
             </div>
        )}
      </div>
    </div>
  );
}
