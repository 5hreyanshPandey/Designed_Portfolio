"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      // Using 0 usually falls back to native momentum scrolling which feels better on mobile
      touchMultiplier: 0,
    }}>
      {children}
    </ReactLenis>
  );

}
