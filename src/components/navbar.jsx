"use client";

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='py-2 px-6 md:px-8 lg:px-12 bg-agro-green shadow-lg text-white sticky top-0 z-50'>
      {/* Logo */}
      <div className='flex justify-between items-center container mx-auto'>
        <div className='ml-4 lg:ml-8'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              alt='Logo Agrolens'
              width={198}
              height={31}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } p-4 md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 font-light text-white text-m md:text-base lg:text-m absolute md:static bg-agro-green md:bg-transparent top-16 left-0 w-full md:w-auto py-4 md:py-0`}
        >
          <li>
            <Link
              href='/'
              className='hover:font-semibold hover:underline underline-offset-8'
            >
              Beranda
            </Link>
          </li>
          <li className='relative group'>
            <button
              onClick={toggleDropdown}
              className='flex items-center hover:font-semibold hover:underline underline-offset-8 focus:outline-none'
            >
              Deteksi
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 9l6 6 6-6'
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className='absolute left-0 w-[200px] mt-2 bg-white border border-agro-yellow shadow-lg rounded-md'>
                <Link
                  href='/deteksi/jenis-tanaman'
                  className='block px-4 py-2 text-black text-sm hover:bg-agro-light-yellow hover:text-white'
                >
                  Jenis Tanaman
                </Link>
                <Link
                  href='/deteksi/penyakit-tanaman'
                  className='block px-4 py-2 text-black text-sm hover:bg-agro-light-yellow hover:text-white'
                >
                  Penyakit Tanaman
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              href='/diskusi'
              className='hover:font-semibold hover:underline underline-offset-8'
            >
              Diskusi
            </Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className='hidden md:flex mr-4 lg:mr-8 space-x-4'>
          <Link
            href='/masuk'
            className='border border-agro-light-yellow text-white text-sm md:text-base lg:text-m px-4 py-1.5 md:px-5 md:py-2 rounded-lg'
          >
            Masuk
          </Link>
          <Link
            href='/daftar'
            className='bg-agro-light-yellow text-black text-sm md:text-base lg:text-m px-3 py-1.5 md:px-4 md:py-2 rounded-lg'
          >
            Daftar
          </Link>
        </div>

        {/* Responsive Mobile Menu */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-primary focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
