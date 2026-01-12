'use client';

import Image from 'next/image';
import { useEffect, useCallback } from 'react';

export default function ImageLightbox({ images, selectedIndex, onClose, onPrev, onNext }) {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
    }, [onClose, onNext, onPrev]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden'; // Prevent background scroll

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [handleKeyDown]);

    if (selectedIndex === null) return null;

    const currentImage = images[selectedIndex];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fadeIn"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-50 transition-colors"
                aria-label="Close lightbox"
            >
                ✕
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-white/80 font-body text-lg">
                {selectedIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl transition-all z-50"
                aria-label="Previous image"
            >
                ‹
            </button>

            {/* Next Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl transition-all z-50"
                aria-label="Next image"
            >
                ›
            </button>

            {/* Main Image */}
            <div
                className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[80vh] max-w-5xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={currentImage.image}
                    alt={currentImage.name}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                <h3 className="font-heading text-2xl font-bold mb-1">{currentImage.name}</h3>
                <p className="text-white/70">{currentImage.description}</p>
            </div>
        </div>
    );
}
