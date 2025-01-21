import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Agrolyze",
  description: "Cerdas Bertani, Panen Berarti",
};

export default function RootLayout({children}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='bg-agro-green'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
