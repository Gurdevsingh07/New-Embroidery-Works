'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ImageLightbox from '../components/ImageLightbox';

const galleryItems = [
    {
        id: 1,
        name: "Devta Ka Pecha",
        category: "Temple",
        image: "/devta-ka-top.png",
        description: "Decorative crown for Devta idols"
    },
    {
        id: 2,
        name: "Suraj Pakha",
        category: "Temple",
        image: "/devta-moh.png",
        description: "Sacred ceremonial fan"
    },
    {
        id: 3,
        name: "Chattar",
        category: "Temple",
        image: "/umbrella-top.png",
        description: "Royal ceremonial umbrella"
    },
    {
        id: 4,
        name: "Banarasi Dupatta",
        category: "Temple",
        image: "/banarasi-dupatta.png",
        description: "Sacred silk for Devta decoration"
    },
    {
        id: 5,
        name: "Makhtool",
        category: "Temple",
        image: "/makhtool.png",
        description: "Heavy velvet embroidery with tassels"
    },
    {
        id: 6,
        name: "Bridal Choora",
        category: "Bridal",
        image: "/choora.png",
        description: "Traditional bridal bangles set"
    },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goToPrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? galleryItems.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setSelectedIndex((prev) =>
            prev === galleryItems.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <main className="min-h-screen bg-ivory">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-maroon-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Our Craftsmanship</p>
                    <h1 className="font-heading text-gold text-4xl sm:text-5xl font-bold mb-4">
                        Gallery
                    </h1>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                    <p className="text-ivory text-lg">
                        Explore our collection of handcrafted sacred and bridal embroidery
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-ivory">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="gallery-item group cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="gallery-item-overlay">
                                    <div>
                                        <span className="text-gold text-xs uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <h3 className="font-heading text-ivory text-lg font-bold mt-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-ivory/80 text-sm mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="text-center mt-16 p-8 bg-cream-texture rounded-lg gold-border-simple">
                        <h3 className="font-heading text-maroon text-2xl font-bold mb-4">
                            Custom Orders Welcome
                        </h3>
                        <p className="text-text-light mb-6 max-w-2xl mx-auto">
                            Each piece is handcrafted to your specifications. Whether you need embroidery
                            for your temple, wedding, or special occasion, we create custom designs
                            tailored to your requirements.
                        </p>
                        <a href="tel:+919418495028" className="btn-gold">
                            📞 Enquire About Custom Orders
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <ImageLightbox
                    images={galleryItems}
                    selectedIndex={selectedIndex}
                    onClose={closeLightbox}
                    onPrev={goToPrev}
                    onNext={goToNext}
                />
            )}
        </main>
    );
}
