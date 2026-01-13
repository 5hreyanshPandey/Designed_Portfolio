# Scrollytelling Portfolio

A high-performance, cinematic personal portfolio website built with Next.js, Framer Motion, and HTML5 Canvas.

## ✨ Features

- **Cinematic Scroll**: Image sequence scrubbing linked to scroll position.
- **High Performance**: HTML5 Canvas rendering with image preloading for smooth playback.
- **Responsive**: `object-fit: cover` logic ensures the canvas looks perfect on any device.
- **Parallax Effects**: Text overlays fade in/out with different velocities.
- **Premium UI**: 
  - 'Outfit' font family.
  - Glassmorphism effects.
  - Smooth inertial scrolling (Lenis).
  - Modern grid layout.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Scroll Engine**: Lenis
- **Deployment**: Vercel (Recommended)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

- `/app`: Application routes and components.
  - `/components`:
    - `ScrollyCanvas.tsx`: Core canvas rendering and scroll logic.
    - `Overlay.tsx`: Scroll-linked text animations.
    - `Projects.tsx`: Project grid with hover effects.
    - `SmoothScroll.tsx`: Lenis scroll wrapper.
- `/public/sequence`: Contains the frame sequence images (`000.png` to `074.png`).

## 🎨 Customization

- **Images**: Replace images in `/public/sequence/`. Ensure they are named sequentially (`000.png`, `001.png`, etc.).
- **Typography**: Change the font in `app/layout.tsx`.
- **Colors**: Update `tailwind.config.ts` or `app/globals.css`.

## 📄 License

MIT License.
