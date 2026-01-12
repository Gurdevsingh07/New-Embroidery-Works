'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-maroon-gradient fixed top-0 left-0 right-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center">
                        <span className="font-heading text-gold text-xl sm:text-2xl font-bold tracking-wide">
                            New Embroidery Works
                        </span>
                        <span className="text-gold-light text-xs tracking-[0.3em] uppercase">
                            Since 1968
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/about" className="nav-link">About Us</Link>
                        <Link href="/gallery" className="nav-link">Gallery</Link>
                        <Link href="/contact" className="nav-link">Contact</Link>
                        <a
                            href="tel:+919418495028"
                            className="btn-gold ml-4 text-sm"
                        >
                            📞 Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gold text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gold/30">
                        <div className="flex flex-col space-y-3">
                            <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link href="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
                            <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
                            <a href="tel:+919418495028" className="btn-gold text-center text-sm mt-4">
                                📞 Call Now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
