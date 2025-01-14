import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-agro-green text-white py-6 px-6 sm:px-10 md:px-16 lg:px-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-8'>
        <div>
          <Image src='/images/logo.svg' alt='' width={200} height={200} />
          <p className='text-sm sm:text-base'>
            Dapatkan informasi terbaru tentang deteksi penyakit tanaman dan tips pertanian melalui media sosial kami
          </p>
          <hr className='border-t-1 block my-8' />
          <div className='flex gap-6 items-center'>
            <Link href='https://www.facebook.com/ukmpcc/?locale=id_ID' target='_blank'>
              <FaFacebook className='text-agro-light-yellow text-lg sm:text-xl' />
            </Link>
            <Link href='https://www.instagram.com/pccpolines/' target='_blank'>
              <FaInstagram className='text-agro-light-yellow text-lg sm:text-xl' />
            </Link>
            <Link href='https://x.com/ukmpcc' target='_blank'>
              <FaTwitter className='text-agro-light-yellow text-lg sm:text-xl' />
            </Link>
            <Link href='https://m.youtube.com/@UKMPCCPOLINES' target='_blank'>
              <FaYoutube className='text-agro-light-yellow text-lg sm:text-xl' />
            </Link>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
          <div>
            <h3 className='font-semibold text-lg sm:text-xl'>Tentang Kami</h3>
            <ul>
              <li>
                <Link href='/'>Beranda</Link>
              </li>
              <li>
                <Link href='/deteksi/jenis-tanaman'>Deteksi Jenis Tanaman</Link>
              </li>
              <li>
                <Link href='/deteksi/penyakit-tanaman'>Deteksi Penyakit Tanaman</Link>
              </li>
              <li>
                <Link href='/diskusi'>Diskusi</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold text-lg sm:text-xl'>Disclaimer</h3>
            <p className='text-sm sm:text-base'>
              Hasil deteksi bersifat rekomendasi, untuk konfirmasi lebih lanjut dianjurkan konsultasi dengan ahli pertanian.
            </p>
          </div>
        </div>
      </div>
      <hr className='border-t-1 my-16' />
      <p className='text-sm sm:text-base text-center'>
        © 2024 AgroLens. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;