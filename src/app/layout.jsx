import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: 'AgroLens',
  description: 'Cerdas Bertani, Panen Berarti',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
