import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: "About Us | New Embroidery Works | Since 1968",
    description: "Learn about New Embroidery Works - a heritage embroidery workshop in Mandi, HP serving temples and wedding families since 1968 with traditional Devta and bridal embroidery.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-ivory">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-maroon-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Our Heritage</p>
                    <h1 className="font-heading text-gold text-4xl sm:text-5xl font-bold mb-4">
                        About Us
                    </h1>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                    <p className="text-ivory text-lg">
                        Five decades of sacred craftsmanship from Mandi, Himachal Pradesh
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-ivory">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Est. 1968</p>
                            <h2 className="font-heading text-maroon text-3xl sm:text-4xl font-bold mb-6">
                                Our Story
                            </h2>
                            <p className="text-text-light leading-relaxed mb-4">
                                New Embroidery Works began its journey in <strong>1968</strong> in the heart of
                                Mandi, Himachal Pradesh. What started as a small workshop has grown into one of
                                the most trusted names in traditional Devta and bridal embroidery.
                            </p>
                            <p className="text-text-light leading-relaxed mb-4">
                                For over <strong>five decades</strong>, we have been serving temples, Devta
                                committees, wedding families, and wholesale buyers with our handcrafted
                                embroidery pieces that honor the sacred traditions of Himachali culture.
                            </p>
                            <p className="text-text-light leading-relaxed">
                                Every piece that leaves our workshop carries the legacy of master artisans
                                and the devotion of generations who have dedicated their lives to this
                                sacred craft.
                            </p>
                        </div>
                        <div className="relative h-96 gold-border-frame rounded-lg overflow-hidden">
                            <Image
                                src="/images/hero-bg.png"
                                alt="Traditional embroidery craftsmanship"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Owner Section */}
            <section className="py-20 bg-cream-texture">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Meet The Founder</p>
                        <h2 className="font-heading text-maroon text-3xl sm:text-4xl font-bold mb-4">
                            The Heart Behind Our Craft
                        </h2>
                        <div className="decorative-divider max-w-md mx-auto">
                            <span>✦</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Owner Photo */}
                        <div className="relative w-64 h-80 gold-border-frame rounded-lg overflow-hidden shadow-xl flex-shrink-0">
                            <Image
                                src="/owner-gurdit-singh.jpg"
                                alt="Gurdit Singh - Owner of New Embroidery Works"
                                fill
                                className="object-cover object-top"
                            />
                        </div>

                        {/* Owner Info */}
                        <div className="text-center md:text-left">
                            <h3 className="font-heading text-maroon text-3xl font-bold mb-2">
                                Mr. Gurdit Singh
                            </h3>
                            <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">
                                Founder & Master Craftsman
                            </p>
                            <p className="text-text-light leading-relaxed mb-4">
                                With a passion for preserving the rich traditions of Himachali embroidery,
                                <strong> Gurdit Singh</strong> has dedicated his life to mastering and passing on
                                the sacred art of temple and bridal embroidery.
                            </p>
                            <p className="text-text-light leading-relaxed">
                                Under his guidance, New Embroidery Works has grown from a humble family
                                workshop into a renowned name trusted by temples, Devta committees, and
                                families across Himachal Pradesh and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 bg-ivory">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-maroon text-3xl sm:text-4xl font-bold mb-4">
                            What We Create
                        </h2>
                        <div className="decorative-divider max-w-md mx-auto">
                            <span>✦</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Temple Embroidery */}
                        <div className="bg-white p-8 rounded-lg gold-border-simple">
                            <h3 className="font-heading text-maroon text-2xl font-bold mb-4">
                                🛕 Temple & Devta Embroidery
                            </h3>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Devta Ka Pecha:</strong> Decorative crown and upper covering for Devta idols</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Suraj Pakha:</strong> Sacred ceremonial fans</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Chattar:</strong> Royal ceremonial umbrellas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Banarasi Dupatta:</strong> Sacred silk for Devta decoration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Makhtool:</strong> Heavy velvet embroidery for spiritual occasions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Bridal & Special */}
                        <div className="bg-white p-8 rounded-lg gold-border-simple">
                            <h3 className="font-heading text-maroon text-2xl font-bold mb-4">
                                👰 Bridal & Special Occasions
                            </h3>
                            <ul className="space-y-3 text-text-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Bridal Choora:</strong> Traditional red & ivory wedding bangles with kundan work</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Bridal Lehengas:</strong> Custom wedding wear with zardozi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold">✦</span>
                                    <span><strong>Custom Orders:</strong> Bespoke embroidery for any occasion</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-ivory">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-maroon text-3xl sm:text-4xl font-bold mb-4">
                            Why Choose Us
                        </h2>
                        <div className="decorative-divider max-w-md mx-auto">
                            <span>✦</span>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🏛️</span>
                            </div>
                            <h3 className="font-heading text-maroon text-lg font-bold mb-2">Since 1968</h3>
                            <p className="text-text-light text-sm">Five decades of trusted heritage</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🪡</span>
                            </div>
                            <h3 className="font-heading text-maroon text-lg font-bold mb-2">Handcrafted</h3>
                            <p className="text-text-light text-sm">100% in-house manufacturing</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="font-heading text-maroon text-lg font-bold mb-2">4.7 Rating</h3>
                            <p className="text-text-light text-sm">Trusted by Mandi locals</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🛕</span>
                            </div>
                            <h3 className="font-heading text-maroon text-lg font-bold mb-2">Temple Trusted</h3>
                            <p className="text-text-light text-sm">Used by temples & Devta committees</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-maroon-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-gold text-2xl sm:text-3xl font-bold mb-4">
                        Visit Our Workshop
                    </h2>
                    <p className="text-ivory-dark mb-6">
                        Experience the artistry firsthand at our workshop in Bhootnath Bazar, Mandi
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-gold">
                            📍 Get Directions
                        </Link>
                        <a href="tel:+919418495028" className="btn-maroon">
                            📞 Call Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
