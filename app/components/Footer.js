import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-maroon-gradient text-gold-light ornate-footer">
            {/* Ornate Pattern Background */}
            <div className="footer-pattern"></div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="text-gold text-xl mb-3">❧ ✦ ❧</div>
                        <h3 className="font-heading text-gold text-3xl font-bold mb-2">
                            New Embroidery Works
                        </h3>
                        <p className="text-gold text-sm tracking-[0.25em] uppercase mb-5">Since 1968</p>
                        <p className="text-sm leading-relaxed opacity-90">
                            Traditional Devta, Temple and Bridal Embroidery Manufacturer serving temples,
                            Devta committees and wedding families for over five decades.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="font-heading text-gold text-xl font-semibold mb-6">Quick Links</h4>
                        <div className="flex flex-col space-y-3">
                            <Link href="/" className="hover:text-gold transition-colors text-gold-light/80 hover:translate-x-1 inline-block transition-transform">
                                → Home
                            </Link>
                            <Link href="/about" className="hover:text-gold transition-colors text-gold-light/80 hover:translate-x-1 inline-block transition-transform">
                                → About Us
                            </Link>
                            <Link href="/gallery" className="hover:text-gold transition-colors text-gold-light/80 hover:translate-x-1 inline-block transition-transform">
                                → Gallery
                            </Link>
                            <Link href="/contact" className="hover:text-gold transition-colors text-gold-light/80 hover:translate-x-1 inline-block transition-transform">
                                → Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h4 className="font-heading text-gold text-xl font-semibold mb-6">Contact Us</h4>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-center justify-center md:justify-end gap-3">
                                <span className="text-gold">📞</span>
                                <a href="tel:+919418495028" className="hover:text-gold transition-colors">+91 94184 95028</a>
                            </p>
                            <p className="flex items-center justify-center md:justify-end gap-3">
                                <span className="text-gold">📞</span>
                                <a href="tel:+919015955319" className="hover:text-gold transition-colors">+91 90159 55319</a>
                            </p>
                            <p className="flex items-center justify-center md:justify-end gap-3">
                                <span className="text-gold">✉️</span>
                                <a href="mailto:new.embroidery.works@gmail.com" className="hover:text-gold transition-colors">
                                    new.embroidery.works@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center justify-center md:justify-end gap-3 text-gold-light/80">
                                <span className="text-gold">📍</span>
                                <span>151/7, Bhootnath Bazar, Samkhetar,<br />
                                    Mandi, HP 175001</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="flex items-center justify-center gap-4 my-10">
                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></span>
                    <span className="text-gold text-lg">◆ ✦ ◆</span>
                    <span className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/50 to-transparent"></span>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gold/20 py-5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm opacity-80">
                    © {new Date().getFullYear()} New Embroidery Works. All rights reserved.
                    <span className="mx-2">|</span>
                    <span className="text-gold/80">Serving with tradition since 1968</span>
                </div>
            </div>
        </footer>
    );
}
