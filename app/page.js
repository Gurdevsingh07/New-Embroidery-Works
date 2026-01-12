import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    const products = [
        {
            name: "Devta Ka Pecha",
            description: "Decorative embroidered crown and upper covering used for Devta idols, representing divine royalty and sacred presence.",
            image: "/devta-ka-top.png"
        },
        {
            name: "Suraj Pakha",
            description: "Sacred embroidered fan symbolizing divine energy, used during rituals and religious processions.",
            image: "/devta-moh.png"
        },
        {
            name: "Chattar",
            description: "Royal hand-embroidered ceremonial umbrella used in Devta yatras, temple events and wedding processions.",
            image: "/umbrella-top.png"
        },
        {
            name: "Banarasi Dupatta",
            description: "Sacred silk Banarasi cloth used to dress Devta idols, palkis and ceremonial backdrops. Includes reinforced borders and zari embroidery.",
            image: "/banarasi-dupatta.png"
        },
        {
            name: "Makhtool",
            description: "Heavy velvet embroidery with colorful silk tassels used for royal, religious and temple decoration.",
            image: "/makhtool.png"
        },
        {
            name: "Bridal Choora",
            description: "Traditional red and ivory bridal bangles set with exquisite kundan and stone work. A symbol of marital bliss and prosperity.",
            image: "/choora.png"
        }
    ];

    const trustPoints = [
        { icon: "🏆", title: "Since 1968", description: "Over 55 years of trusted craftsmanship" },
        { icon: "⭐", title: "4.7 Rating", description: "Highly rated on Google Reviews" },
        { icon: "🙏", title: "500+ Temples", description: "Serving temples across Himachal & beyond" },
        { icon: "👨‍👧", title: "3 Generations", description: "Family legacy of master artisans" }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="Traditional Embroidery Background"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    {/* Multi-layer gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/90 via-maroon/70 to-maroon-dark/95"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/40 via-transparent to-maroon-dark/40"></div>

                    {/* Subtle gold pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    ></div>
                </div>

                {/* Elegant Floral Flourish Corners */}
                <div className="absolute top-20 left-4 z-20 text-gold/40 text-4xl hidden md:block">❧</div>
                <div className="absolute top-20 right-4 z-20 text-gold/40 text-4xl hidden md:block transform scale-x-[-1]">❧</div>
                <div className="absolute bottom-4 left-4 z-20 text-gold/40 text-4xl hidden md:block transform rotate-180 scale-x-[-1]">❧</div>
                <div className="absolute bottom-4 right-4 z-20 text-gold/40 text-4xl hidden md:block transform rotate-180">❧</div>

                {/* Decorative side lines */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                    <div className="w-3 h-3 border border-gold/50 rotate-45 -ml-[5px] mt-2"></div>
                    <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                    <div className="w-3 h-3 border border-gold/50 rotate-45 -ml-[5px] mt-2"></div>
                    <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent"></div>
                </div>

                {/* Hero Content with Glass Bubble Effect */}
                <div className="relative z-20 text-center px-4 pt-16 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
                    {/* Glass Bubble Container */}
                    <div className="relative px-12 py-20 md:px-24 md:py-24 rounded-3xl backdrop-blur-sm border border-gold/10 shadow-2xl shadow-black/20"
                        style={{
                            background: 'linear-gradient(135deg, rgba(74, 4, 4, 0.15) 0%, rgba(139, 0, 0, 0.12) 50%, rgba(74, 4, 4, 0.15) 100%)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 60px rgba(212, 175, 55, 0.02), 0 0 40px rgba(212, 175, 55, 0.03)'
                        }}
                    >
                        {/* Golden Climber Borders - Top Left Corner */}
                        <div className="absolute top-0 left-0">
                            <div className="absolute top-0 left-6 w-24 md:w-32 h-0.5 bg-gradient-to-r from-gold/60 to-transparent"></div>
                            <div className="absolute top-6 left-0 h-24 md:h-32 w-0.5 bg-gradient-to-b from-gold/60 to-transparent"></div>
                            <div className="absolute top-0 left-0 text-gold/80 text-2xl">✿</div>
                        </div>

                        {/* Golden Climber Borders - Top Right Corner */}
                        <div className="absolute top-0 right-0">
                            <div className="absolute top-0 right-6 w-24 md:w-32 h-0.5 bg-gradient-to-l from-gold/60 to-transparent"></div>
                            <div className="absolute top-6 right-0 h-24 md:h-32 w-0.5 bg-gradient-to-b from-gold/60 to-transparent"></div>
                            <div className="absolute top-0 right-0 text-gold/80 text-2xl">✿</div>
                        </div>

                        {/* Golden Climber Borders - Bottom Left Corner */}
                        <div className="absolute bottom-0 left-0">
                            <div className="absolute bottom-0 left-6 w-24 md:w-32 h-0.5 bg-gradient-to-r from-gold/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-0 h-24 md:h-32 w-0.5 bg-gradient-to-t from-gold/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 text-gold/80 text-2xl">✿</div>
                        </div>

                        {/* Golden Climber Borders - Bottom Right Corner */}
                        <div className="absolute bottom-0 right-0">
                            <div className="absolute bottom-0 right-6 w-24 md:w-32 h-0.5 bg-gradient-to-l from-gold/60 to-transparent"></div>
                            <div className="absolute bottom-6 right-0 h-24 md:h-32 w-0.5 bg-gradient-to-t from-gold/60 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 text-gold/80 text-2xl">✿</div>
                        </div>
                        {/* Main Title */}
                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            <span className="text-gold drop-shadow-[0_4px_20px_rgba(212,175,55,0.3)]">New Embroidery</span>
                            <br />
                            <span className="text-gold-light italic">Works</span>
                        </h1>

                        {/* Est. 1968 divider */}
                        <div className="flex items-center justify-center gap-4 mb-5">
                            <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60"></span>
                            <span className="text-gold/90 text-sm tracking-[0.4em] uppercase font-semibold">Est. 1968</span>
                            <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60"></span>
                        </div>

                        {/* Tagline */}
                        <p className="text-gold-light text-xl md:text-2xl mb-3 mt-6 font-light tracking-wide">
                            Traditional Devta & Bridal Embroidery
                        </p>
                        <p className="text-gold-light/80 text-base md:text-lg mb-10 tracking-wider">
                            Mandi, Himachal Pradesh
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                            <a
                                href="tel:+919418495028"
                                className="group relative px-8 py-3 bg-transparent border-2 border-gold text-gold font-heading uppercase tracking-wider text-sm hover:bg-gold hover:text-maroon-dark transition-all duration-300"
                            >
                                <span className="relative z-10">Call Us</span>
                                <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </a>
                            <Link
                                href="/gallery"
                                className="group relative px-8 py-3 bg-gold text-maroon-dark font-heading uppercase tracking-wider text-sm hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
                            >
                                <span className="relative z-10">View Gallery</span>
                            </Link>
                            <a
                                href="https://wa.me/919418495028"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-3 bg-transparent border-2 border-gold text-gold font-heading uppercase tracking-wider text-sm hover:bg-gold hover:text-maroon-dark transition-all duration-300"
                            >
                                <span className="relative z-10">WhatsApp</span>
                                <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </a>
                        </div>
                    </div>

                    {/* Scroll Indicator - outside the bubble */}
                    <div className="mt-24 animate-bounce">
                        <span className="text-gold/60 text-xs tracking-[0.2em] uppercase block mb-1">Scroll to Explore</span>
                        <span className="text-gold/80 text-lg">↓</span>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-cream py-16 relative">
                <div className="thread-wave-separator"></div>
                <div className="max-w-7xl mx-auto px-4 pt-6">
                    <p className="text-center text-maroon-dark mb-12 font-light text-lg max-w-3xl mx-auto">
                        Each piece is handcrafted with devotion, preserving the ancient art of Himachali temple embroidery passed down through generations.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {trustPoints.map((point, index) => (
                            <div
                                key={index}
                                className="trust-badge text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gold/10"
                            >
                                <div className="trust-badge-icon mx-auto">
                                    <span>{point.icon}</span>
                                </div>
                                <h3 className="font-heading text-maroon-dark text-lg font-bold mt-4 mb-1">{point.title}</h3>
                                <p className="text-gray-600 text-sm">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gradient-to-b from-cream to-ivory">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flourish-container mb-4">
                            <span className="flourish-icon text-maroon">✦</span>
                            <span className="flourish-icon text-maroon text-2xl">❧</span>
                            <span className="flourish-icon text-maroon">✦</span>
                        </div>
                        <span className="text-maroon text-sm tracking-[0.3em] uppercase block mb-3">Our Specialties</span>
                        <h2 className="font-heading text-maroon-dark text-4xl md:text-5xl font-bold mb-6">
                            Sacred Embroidery Collection
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></span>
                            <span className="text-gold text-xl">◆</span>
                            <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></span>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <article
                                key={index}
                                className="product-card group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
                                </div>
                                <div className="card-content">
                                    <h3 className="font-heading text-maroon-dark text-xl font-bold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                                    <a
                                        href="https://wa.me/919418495028"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="enquire-link text-maroon font-semibold hover:text-gold transition-colors inline-flex items-center gap-2 group/link"
                                    >
                                        Enquire Now
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-maroon-gradient relative overflow-hidden">
                {/* Background pattern */}
                <div className="footer-pattern"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flourish-container mb-4">
                            <span className="flourish-icon">✦</span>
                            <span className="flourish-icon text-2xl">❧</span>
                            <span className="flourish-icon">✦</span>
                        </div>
                        <span className="text-gold/80 text-sm tracking-[0.3em] uppercase block mb-3">Testimonials</span>
                        <h2 className="font-heading text-gold text-4xl md:text-5xl font-bold mb-6">
                            What Our Clients Say
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <span className="w-16 h-px bg-gradient-to-r from-transparent to-gold/60"></span>
                            <span className="text-gold text-xl">◆</span>
                            <span className="w-16 h-px bg-gradient-to-l from-transparent to-gold/60"></span>
                        </div>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-gold text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-ivory/90 italic mb-6 leading-relaxed">
                                "We have been ordering Devta Ka Paacha and Chhatta from New Embroidery Works for our temple for over 15 years. The quality and craftsmanship is exceptional. Highly recommended!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xl">
                                    🛕
                                </div>
                                <div>
                                    <p className="font-heading text-gold font-bold">Shri Bhimakali Temple Committee</p>
                                    <p className="text-ivory/60 text-sm">Sarahan, Himachal Pradesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-gold text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-ivory/90 italic mb-6 leading-relaxed">
                                "Got my bridal lehenga embroidery done from here. The zardozi work was absolutely stunning. Everyone at the wedding complimented the intricate designs. Thank you!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xl">
                                    👰
                                </div>
                                <div>
                                    <p className="font-heading text-gold font-bold">Priya Sharma</p>
                                    <p className="text-ivory/60 text-sm">Mandi, Himachal Pradesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:-translate-y-2">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-gold text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-ivory/90 italic mb-6 leading-relaxed">
                                "As a wholesale buyer, I've worked with many embroidery suppliers. New Embroidery Works delivers consistent quality with every order. Their Banarasi dupattas are unmatched."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xl">
                                    🏪
                                </div>
                                <div>
                                    <p className="font-heading text-gold font-bold">Rajesh Textiles</p>
                                    <p className="text-ivory/60 text-sm">Chandigarh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Rating Badge */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-gold/30">
                            <span className="text-gold text-2xl">⭐</span>
                            <span className="text-ivory font-heading font-bold text-lg">4.7</span>
                            <span className="text-ivory/70">Rating on Google</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-cream-texture overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-maroon rounded-full blur-3xl"></div>
                </div>

                {/* Decorative border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    {/* Flourish */}
                    <div className="flourish-container mb-6">
                        <span className="text-maroon text-xl">✦</span>
                        <span className="text-gold text-2xl">❧</span>
                        <span className="text-maroon text-xl">✦</span>
                    </div>

                    <h2 className="font-heading text-maroon-dark text-4xl md:text-5xl font-bold mb-6">
                        Ready to Order?
                    </h2>
                    <p className="text-text-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Contact us today for custom embroidery work. We craft each piece with devotion and deliver across India.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <a
                            href="tel:+919418495028"
                            className="btn-gold text-lg px-10 py-4"
                        >
                            📞 +91 94184 95028
                        </a>
                        <a
                            href="https://wa.me/919418495028"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold text-lg px-10 py-4"
                            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', borderColor: '#128C7E' }}
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* WhatsApp Float Button - Premium */}
            <a
                href="https://wa.me/919418495028"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <span className="text-3xl">💬</span>
            </a>

            <Footer />
        </main>
    );
}
