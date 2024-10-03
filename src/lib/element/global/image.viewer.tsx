'use client';

import { useState, useRef, useCallback } from 'react';

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, className }) => {
  const [scale, setScale] = useState(1); // Zoom level
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Position of the image
  const [dragging, setDragging] = useState(false); // Is the image being dragged?
  const dragStartPosition = useRef({ x: 0, y: 0 }); // Initial drag position
  const lastPosition = useRef({ x: 0, y: 0 }); // Last known position before dragging

  // Function to zoom in
  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3)); // Max zoom 3x
  };

  // Function to zoom out
  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Min zoom 0.5x
  };

  // Function to reset zoom and position
  const handleRefresh = () => {
    setScale(1); // Reset zoom to original size
    setPosition({ x: 0, y: 0 }); // Reset image position
  };

  // When mouse is pressed, start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true); // Enable dragging
    dragStartPosition.current = { x: e.clientX, y: e.clientY }; // Store initial position
    lastPosition.current = { ...position }; // Store last known position
    document.addEventListener('mousemove', handleMouseMove); // Listen for mousemove event
    document.addEventListener('mouseup', handleMouseUp); // Listen for mouseup event
  };

  // Function to calculate new position while dragging
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return; // Only proceed if dragging is enabled

      const dx = e.clientX - dragStartPosition.current.x; // Calculate horizontal movement
      const dy = e.clientY - dragStartPosition.current.y; // Calculate vertical movement

      // Update the image position based on movement
      setPosition({
        x: lastPosition.current.x + dx,
        y: lastPosition.current.y + dy,
      });
    },
    [dragging]
  );

  // When mouse is released, stop dragging
  const handleMouseUp = () => {
    setDragging(false); // Disable dragging
    document.removeEventListener('mousemove', handleMouseMove); // Remove mousemove listener
    document.removeEventListener('mouseup', handleMouseUp); // Remove mouseup listener
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative border rounded shadow-lg overflow-hidden p-4">
        <div
          className="relative flex justify-center items-center overflow-hidden"
          style={{
            width: '100%',
            height: '600px',
            cursor: dragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={handleMouseDown}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-none object-contain"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: dragging ? 'none' : 'transform 0.3s ease', // Disable smooth animation while dragging
            }}
          />
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleZoomIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Zoom Out
        </button>
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
