'use client';

import { useState, useRef, useEffect } from 'react';

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, className }) => {
  const [scale, setScale] = useState(1); // Zoom level
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Position of the image
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Offset when dragging starts

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

  useEffect(() => {
    const img = imageRef.current;
    const container = containerRef.current;

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging || !img || !container) return;

      // Calculate new position with offset
      const newX = event.pageX - container.offsetLeft - dragOffset.x;
      const newY = event.pageY - container.offsetTop - dragOffset.y;

      setPosition({ x: newX, y: newY });
    };

    const onMouseDown = (event: MouseEvent) => {
      if (!img || !container) return;

      event.preventDefault();
      setIsDragging(true);

      // Calculate initial drag offset
      const offsetX = event.pageX - container.offsetLeft - position.x;
      const offsetY = event.pageY - container.offsetTop - position.y;
      setDragOffset({ x: offsetX, y: offsetY });

      document.addEventListener('mousemove', onMouseMove);
    };

    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
    };

    if (img) {
      img.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    }

    // Cleanup listeners on unmount
    return () => {
      if (img) {
        img.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
      }
    };
  }, [isDragging, dragOffset, position]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        ref={containerRef}
        className="relative w-[400px] h-[400px] border rounded shadow-lg overflow-hidden p-4 bg-gray-200"
      >
        <div className="relative flex justify-center items-center">
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="max-w-none object-contain"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.3s ease',
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
