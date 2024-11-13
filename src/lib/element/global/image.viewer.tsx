/* eslint-disable no-restricted-imports */
'use client';

import { API_BASE_URL } from '@/app/(views)/$constant/variables';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const DraggableZoomableImage = ({ image }: { image?: string }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ top: 0, left: 0 });
  const [scale, setScale] = useState(1); // For zooming

  useEffect(() => {
    if (imageRef.current) {
      const frameWidth = imageRef.current.offsetWidth;
      const frameHeight = imageRef.current.offsetHeight;
      const initialLeft = (frameWidth - 1100) / 2;
      const initialTop = (frameHeight - 800) / 2;
      setOffset({ top: initialTop, left: initialLeft });
    }
  }, [imageRef]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging || !imageRef.current) return;

      const newX = startPos.x - e.clientX;
      const newY = startPos.y - e.clientY;

      setOffset((prev) => ({
        top: prev.top - newY,
        left: prev.left - newX,
      }));

      setStartPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, startPos]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  // Zoom in and Zoom out functions
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3)); // Limit max zoom
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Limit min zoom
  };

  // Reset zoom and position
  const resetZoomAndPosition = () => {
    setScale(1);
    if (imageRef.current) {
      const frameWidth = imageRef.current.offsetWidth;
      const frameHeight = imageRef.current.offsetHeight;
      const initialLeft = (frameWidth - 600) / 2;
      const initialTop = (frameHeight - 400) / 2;
      setOffset({ top: initialTop, left: initialLeft });
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full container bg-red-200">
      <div className="absolute bg-white z-10 right-0 top-0">
        <div className="flex items-center gap-2">
          <button
            onClick={zoomIn}
            className="h-8 w-8 rounded-full text-white bg-blue-01 flex justify-center items-center"
          >
            <div className="relative h-4 w-4 text-white">
              <Image
                src="/web/guest/icons/zoom-in.svg"
                alt="zoom-in"
                fill
                className="text-white"
              />
            </div>
          </button>
          <button
            onClick={zoomOut}
            className="h-8 w-8 rounded-full text-white bg-blue-01 flex justify-center items-center"
          >
            <div className="relative h-4 w-4 text-white">
              <Image
                src="/web/guest/icons/zoom-out.svg"
                alt="zoom-in"
                fill
                className="text-white"
              />
            </div>
          </button>
          <button
            onClick={resetZoomAndPosition}
            className="h-8 w-8 rounded-full text-white bg-blue-01 flex justify-center items-center"
          >
            <div className="relative h-4 w-4 text-white">
              <Image
                src="/web/guest/icons/sync.svg"
                alt="zoom-in"
                fill
                className="text-white"
              />
            </div>
          </button>
        </div>
      </div>

      <div className="mx-auto flex justify-center items-center w-full bg-red-200">
        <div
          ref={imageRef}
          onMouseDown={handleMouseDown}
          style={{
            backgroundImage: `url(${API_BASE_URL}${image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            top: `${offset.top}px`,
            left: `${offset.left}px`,
            width: '1100px',
            height: '800px',
            cursor: dragging ? 'grabbing' : 'grab',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default DraggableZoomableImage;
