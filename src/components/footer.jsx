import Image from "next/image";
import Link from "next/link";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-agro-green text-white p-16'>
      <div className='grid grid-cols-2 items-center gap-8'>
        <div>
          <Image src='/images/logo.svg' alt='' width={200} height={200} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            odio unde ullam praesentium voluptates adipisci cum veritatis illum
            assumenda nihil!
          </p>
          <hr className='border-t-1 block my-8' />
          <div className='flex gap-6 items-center'>
            <Link href='#'>
              <FaFacebook className='text-agro-light-yellow text-lg' />
            </Link>
            <Link href='#'>
              <FaInstagram className='text-agro-light-yellow text-lg' />
            </Link>
            <Link href='#'>
              <FaTwitter className='text-agro-light-yellow text-lg' />
            </Link>
            <Link href='#'>
              <FaYoutube className='text-agro-light-yellow text-lg' />
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>
            <h3 className='font-semibold text-lg'>Usefull Links</h3>
            <ul>
              <li>Beranda</li>
              <li>Deteksi Jenis Tanaman</li>
              <li>Deteksi Penyakit Tanaman</li>
              <li>Diskusi</li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold'>News Letter</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, quidem?
            </p>
          </div>
        </div>
      </div>
      <hr className='border-t-1 my-20' />
      <div className='flex justify-between'>
        <p className='text-sm'>© 2024 AgroLens. All Rights Reserved</p>
        <div className='flex gap-4'>
          <Link href='#' className='text-sm'>
            Terms & Condition
          </Link>
          <Link href='#' className='text-sm'>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
