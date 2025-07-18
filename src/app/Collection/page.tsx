"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/Component 23.png",
  "/Component 17.png",
  "/Component 21.png",
  "/Component 22.png",
];

const DURATION = 12; // seconds for one full scroll

const CollectionPage: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Calculate the width of the image row for seamless animation
  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (width === 0) return;
    if (!isPaused) {
      controls.start({
        x: [0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: DURATION,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls, width]);

  // Duplicate images for seamless loop
  const imageList = [...images, ...images];

  return (
    <div
      className="relative w-full overflow-x-hidden py-12 px-2 md:px-0"
      aria-label="Scrolling collection of images"
    >
      <button
        onClick={() => setIsPaused((prev) => !prev)}
        className={`mb-6 px-4 py-2 rounded-md font-semibold shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isPaused ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
        aria-pressed={isPaused}
      >
        {isPaused ? 'Resume Animation' : 'Pause Animation'}
      </button>
      <motion.div
        ref={containerRef}
        className="flex flex-row gap-6 w-max"
        animate={controls}
        style={{ x: 0 }}
      >
        {imageList.map((src, idx) => (
          <motion.div
            key={src + idx}
            className="flex flex-col items-center min-w-[180px] md:min-w-[220px] lg:min-w-[260px]"
            whileHover={{ scale: 1.08 }}
          >
            <Image
              src={src}
              width={260}
              height={260}
              alt={`Collection Image ${idx % images.length + 1}`}
              className="w-40 md:w-56 lg:w-64 h-auto object-cover overflow-hidden rounded-md shadow-md select-none pointer-events-auto"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollectionPage; 