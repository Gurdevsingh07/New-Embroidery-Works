import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
    title: "Contact Us | New Embroidery Works | Mandi, Himachal Pradesh",
    description: "Contact New Embroidery Works for Devta and bridal embroidery. Visit us at Bhootnath Bazar, Mandi or call +91 94184 95028.",
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-ivory">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-maroon-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Get In Touch</p>
                    <h1 className="font-heading text-gold text-4xl sm:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                    <p className="text-ivory text-lg">
                        Visit our workshop or reach out for custom orders
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-ivory">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <div>
                            <h2 className="font-heading text-maroon text-3xl font-bold mb-8">
                                Get In Touch
                            </h2>

                            {/* Phone Numbers */}
                            <div className="mb-8">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    📞 Phone
                                </h3>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+919418495028"
                                        className="flex items-center gap-4 p-4 bg-white rounded-lg gold-border-simple hover:bg-gold/10 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-maroon-dark font-bold text-xl">
                                            📞
                                        </div>
                                        <div>
                                            <p className="text-text-light text-sm text-maroon/70">Main Contact</p>
                                            <p className="font-body text-maroon text-xl font-bold group-hover:text-gold-dark tracking-wide">
                                                +91 94184 95028
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:+919015955319"
                                        className="flex items-center gap-4 p-4 bg-white rounded-lg gold-border-simple hover:bg-gold/10 transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-maroon-dark font-bold text-xl">
                                            📱
                                        </div>
                                        <div>
                                            <p className="text-text-light text-sm text-maroon/70">Alternate Contact</p>
                                            <p className="font-body text-maroon text-xl font-bold group-hover:text-gold-dark tracking-wide">
                                                +91 90159 55319
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="mb-8">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    💬 WhatsApp
                                </h3>
                                <a
                                    href="https://wa.me/919418495028?text=Hello!%20I%20am%20interested%20in%20your%20embroidery%20products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg gold-border-simple hover:bg-gold/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-maroon-dark font-bold text-xl">
                                        💬
                                    </div>
                                    <div>
                                        <p className="text-text-light text-sm text-maroon/70">Chat with us on</p>
                                        <p className="font-body text-maroon text-xl font-bold group-hover:text-gold-dark tracking-wide">
                                            WhatsApp
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Email */}
                            <div className="mb-8">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    ✉️ Email
                                </h3>
                                <a
                                    href="mailto:new.embroidery.works@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg gold-border-simple hover:bg-gold/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-maroon-dark font-bold text-xl">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="text-text-light text-sm text-maroon/70">Email us at</p>
                                        <p className="font-body text-maroon font-bold group-hover:text-gold-dark break-all text-base">
                                            new.embroidery.works@gmail.com
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Instagram */}
                            <div className="mb-8">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    📸 Instagram
                                </h3>
                                <a
                                    href="https://instagram.com/gurdit_new_embroidery_works"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg gold-border-simple hover:bg-gold/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-maroon-dark font-bold text-xl">
                                        📸
                                    </div>
                                    <div>
                                        <p className="text-text-light text-sm text-maroon/70">Follow us at</p>
                                        <p className="font-body text-maroon font-bold group-hover:text-gold-dark text-base">
                                            @gurdit_new_embroidery_works
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Address & Map */}
                        <div>
                            <h2 className="font-heading text-maroon text-3xl font-bold mb-8">
                                Visit Our Workshop
                            </h2>

                            {/* Address Card */}
                            <div className="bg-white p-6 rounded-lg gold-border-frame mb-6">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    📍 Address
                                </h3>
                                <address className="not-italic text-text-light leading-relaxed text-lg">
                                    <strong className="text-maroon">New Embroidery Works</strong><br />
                                    151/7, Bhootnath Bazar, Samkhetar,<br />
                                    Mandi, Himachal Pradesh 175001,<br />
                                    India
                                </address>
                                <a
                                    href="https://maps.google.com/?q=151/7+Bhootnath+Bazar+Samkhetar+Mandi+Himachal+Pradesh+175001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gold mt-4 inline-block"
                                >
                                    📍 Get Directions
                                </a>
                            </div>

                            {/* Map Embed */}
                            <div className="rounded-lg overflow-hidden gold-border-simple h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.7!2d76.9317!3d31.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQyJzMyLjAiTiA3NsKwNTUnNTQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="New Embroidery Works Location"
                                ></iframe>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-cream-texture p-6 rounded-lg mt-6 gold-border-simple">
                                <h3 className="font-heading text-maroon text-xl font-semibold mb-4">
                                    🕐 Business Hours
                                </h3>
                                <div className="space-y-2 text-text-light">
                                    <div className="flex justify-between">
                                        <span>Monday - Saturday</span>
                                        <span className="font-semibold">10:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold">By Appointment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enquiry Form Section */}
            <section className="py-16 bg-cream-texture">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-maroon text-3xl font-bold mb-4">
                            Send Us an Enquiry
                        </h2>
                        <p className="text-text-light">
                            Fill out the form below and we'll get back to you within 24 hours
                        </p>
                    </div>

                    <form
                        className="bg-white p-8 rounded-xl gold-border-frame"
                        action={`https://formsubmit.co/new.embroidery.works@gmail.com`}
                        method="POST"
                    >
                        {/* Honeypot for spam protection */}
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        {/* Disable captcha */}
                        <input type="hidden" name="_captcha" value="false" />
                        {/* Success redirect */}
                        <input type="hidden" name="_next" value="http://localhost:3000/contact?success=true" />

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Name */}
                            <div>
                                <label className="block text-maroon font-semibold mb-2" htmlFor="name">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-maroon font-semibold mb-2" htmlFor="phone">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-maroon font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Product Interest */}
                        <div className="mb-6">
                            <label className="block text-maroon font-semibold mb-2" htmlFor="product">
                                Product Interest
                            </label>
                            <select
                                id="product"
                                name="product"
                                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors bg-white"
                            >
                                <option value="">Select a product</option>
                                <option value="Devta Ka Paacha">Devta Ka Paacha</option>
                                <option value="Devta Ka Top">Devta Ka Top</option>
                                <option value="Suraj Pankh">Suraj Pankh</option>
                                <option value="Chhatta">Chhatta (Ceremonial Umbrella)</option>
                                <option value="Banarasi Dupatta">Banarasi Dupatta</option>
                                <option value="Makhtool">Makhtool (Velvet Embroidery)</option>
                                <option value="Bridal Choora">Bridal Choora</option>
                                <option value="Bridal Lehenga">Bridal Lehenga Embroidery</option>
                                <option value="Custom Order">Custom Order</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label className="block text-maroon font-semibold mb-2" htmlFor="message">
                                Your Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                                placeholder="Tell us about your requirements..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn-gold w-full justify-center text-lg"
                        >
                            ✉️ Send Enquiry
                        </button>

                        <p className="text-center text-text-light text-sm mt-4">
                            Or call us directly at <a href="tel:+919418495028" className="text-maroon font-bold hover:text-gold">+91 94184 95028</a>
                        </p>
                    </form>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-maroon-gradient">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-gold text-2xl sm:text-3xl font-bold mb-4">
                        Ready to Place an Order?
                    </h2>
                    <p className="text-ivory-dark mb-6">
                        Call us today for custom Devta embroidery, bridal wear, or wholesale orders
                    </p>
                    <a href="tel:+919418495028" className="btn-gold text-lg">
                        📞 +91 94184 95028
                    </a>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
