import "./globals.css";

export const metadata = {
  title: "New Embroidery Works | Since 1968 | Devta & Bridal Embroidery Mandi",
  description: "Traditional Devta, Temple and Bridal Embroidery Manufacturer in Mandi, Himachal Pradesh. Premium handcrafted Devta Ka Paacha, Suraj Pankh, Chhatta, Banarasi Dupatta since 1968. ★4.7 Google Rating.",
  keywords: "Devta embroidery Mandi, Devta Ka Paacha, Banarasi for Devta, Suraj Pankh supplier, Chhatta embroidery, Bridal embroidery Himachal Pradesh, Temple embroidery India, Makhtool velvet embroidery",
  openGraph: {
    title: "New Embroidery Works | Since 1968",
    description: "Traditional Devta, Temple and Bridal Embroidery Manufacturer in Mandi, HP",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
