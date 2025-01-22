import NavbarAdmin from "@/components/atoms/flowbite/NavbarAdmin";
import SidebarAdmin from "@/components/atoms/flowbite/SidebarAdmin";
import "../(public)/globals.css";

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
      <body className='dark:bg-gray-900'>
        <NavbarAdmin />
        <div className='flex gap-2'>
          <SidebarAdmin />
          {children}
        </div>
      </body>
    </html>
  );
}
