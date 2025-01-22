"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";
import {
  getToken,
  getUserProfile,
  isAuthenticated,
  removeToken,
} from "@/lib/auth";
import {CgProfile} from "react-icons/cg";
import {MdHistory} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";
import {LuLogOut} from "react-icons/lu";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isDeteksiDropdownOpen, setIsDeteksiDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const token = getToken();

  const isActive = (href) => pathname === href;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuItemClick = () => setIsMenuOpen(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsDeteksiDropdownOpen(false);
  };

  const toggleDeteksiDropdown = () => {
    setIsDeteksiDropdownOpen(!isDeteksiDropdownOpen);
  };

  const closeAllDropdowns = () => {
    setIsUserDropdownOpen(false);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (token && isClient) {
      getUserProfile()
        .then((data) => {
          setUser(data.data);
        })
        .catch((err) => {
          console.error("Error fetching user profile:", err);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [isClient, token]);

  return (
    <nav className='flex justify-between items-center py-4 px-6 md:px-8 lg:px-12 bg-agro-green shadow-lg text-m sticky top-0 z-50'>
      <div className='text-m font-bold ml-4 lg:ml-8'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='Logo'
            width={131}
            height={50}
            className='h-auto'
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-4 lg:space-x-6 font-light text-white text-sm md:text-base lg:text-m items-center'>
        <li>
          <Link
            href='/'
            className={`mr-7 ${
              isActive("/")
                ? "font-semibold underline underline-offset-8 hover:text-agro-yellow"
                : ""
            }`}
          >
            Beranda
          </Link>
        </li>
        <li className='relative group'>
          <button
            onClick={toggleDeteksiDropdown}
            className='flex items-center hover:text-agro-yellow focus:outline-none mr-7'
          >
            Deteksi
            <svg
              className={`ml-2 w-4 h-4 transition-transform ${
                isDeteksiDropdownOpen ? "rotate-180" : ""
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
          {isDeteksiDropdownOpen && (
            <div className='absolute left-0 w-48 mt-2 bg-white border border-agro-yellow shadow-lg rounded-lg z-10'>
              <Link
                href='/deteksi/jenis-tanaman'
                className='block px-4 py-2 text-black hover:bg-agro-light-yellow hover:text-white'
                onClick={() => {
                  closeAllDropdowns();
                  handleMenuItemClick();
                }}
              >
                Jenis Tanaman
              </Link>
              <Link
                href='/deteksi/penyakit-tanaman'
                className='block px-4 py-2 text-black hover:bg-agro-light-yellow hover:text-white'
                onClick={() => {
                  closeAllDropdowns();
                  handleMenuItemClick();
                }}
              >
                Penyakit Tanaman
              </Link>
            </div>
          )}
        </li>
        <li>
          <Link
            href='/diskusi'
            className={`mr-7
              ${
                isActive("/diskusi")
                  ? "font-semibold underline underline-offset-8 hover:text-agro-yellow"
                  : ""
              }`}
          >
            Diskusi
          </Link>
        </li>
        <li>
          <Link
            href='/artikel'
            className={`mr-7
              ${
                isActive("/artikel")
                  ? "font-semibold underline underline-offset-8 hover:text-agro-yellow"
                  : ""
              }`}
          >
            Artikel
          </Link>
        </li>
        {isClient && isAuthenticated() ? (
          <li className='flex items-center space-x-4'>
            <div
              onClick={toggleUserDropdown}
              className='flex items-center bg-agro-light-yellow w-[200px] px-4 py-2 rounded-lg cursor-pointer'
            >
              <div className='mx-auto flex items-center'>
                <Image
                  src={user?.image || "/images/icon_profil.svg"}
                  alt='Profile'
                  width={30}
                  height={30}
                  className='rounded-full w-auto  object-cover'
                />
                <span className='ml-2 text-black'>
                  {user?.name?.substring(0, 10)}
                </span>
                <svg
                  className={`ml-2 w-4 h-4 transition-transform ${
                    isUserDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill='none'
                  stroke='black'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 9l6 6 6-6'
                  ></path>
                </svg>
              </div>
            </div>

            {/* Dropdown Menu */}
            {isUserDropdownOpen && (
              <div
                className='absolute right-0 mt-2 w-[200px] bg-white border shadow-lg rounded-lg'
                style={{top: "calc(100% + 1px)"}}
              >
                <Link
                  href='/profile'
                  className='flex items-center px-4 py-2 text-black hover:bg-gray-100'
                  onClick={closeAllDropdowns}
                >
                  <CgProfile size={20} className='mr-2' />
                  Profil Saya
                </Link>
                <Link
                  href='/riwayat'
                  className='flex items-center px-4 py-2 text-black hover:bg-gray-100'
                  onClick={closeAllDropdowns}
                >
                  <MdHistory size={24} className='mr-2' />
                  Riwayat
                </Link>
                <Link
                  href='/pengaturan'
                  className='flex items-center px-4 py-2 text-black hover:bg-gray-100'
                  onClick={closeAllDropdowns}
                >
                  <IoSettingsOutline size={20} className='mr-2' />
                  Pengaturan
                </Link>
                <Link
                  href='/'
                  onClick={() => {
                    removeToken();
                    closeAllDropdowns();
                  }}
                  className='flex items-center px-4 py-2 text-red-600 hover:bg-red-100 w-full'
                >
                  <LuLogOut size={20} className='mr-2 border-red-600' />
                  Keluar
                </Link>
              </div>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link
                href='/masuk'
                className='border border-agro-light-yellow text-white px-4 py-2 rounded-lg'
              >
                Masuk
              </Link>
            </li>
            <li>
              <Link
                href='/daftar'
                className='bg-agro-light-yellow text-black px-4 py-2 rounded-lg'
              >
                Daftar
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-agro-green shadow-lg'>
          <ul className='flex flex-col space-y-4 py-4 px-6 text-white text-sm font-light'>
            <li>
              <Link
                href='/'
                className={`${
                  isActive("/")
                    ? "font-semibold underline underline-offset-8"
                    : ""
                }`}
                onClick={handleMenuItemClick}
              >
                Beranda
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className='flex items-center justify-between w-full hover:text-primary'
              >
                Deteksi
                <svg
                  className={`w-4 h-4 transition-transform ${
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
                <div className='mt-2 ml-4'>
                  <Link
                    href='/deteksi/jenis-tanaman'
                    className='block px-4 py-2 text-white'
                    onClick={() => {
                      closeDropdown();
                      handleMenuItemClick();
                    }}
                  >
                    Jenis Tanaman
                  </Link>
                  <Link
                    href='/deteksi/penyakit-tanaman'
                    className='block px-4 py-2 text-white'
                    onClick={() => {
                      closeDropdown();
                      handleMenuItemClick();
                    }}
                  >
                    Penyakit Tanaman
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href='/diskusi'
                className={`${
                  isActive("/diskusi")
                    ? "font-semibold underline underline-offset-8"
                    : ""
                }`}
                onClick={handleMenuItemClick}
              >
                Diskusi
              </Link>
            </li>

            {isClient && isAuthenticated() ? (
              <>
                <li className='flex items-center space-x-4'>
                  {/* Icon Notifikasi */}
                  <button className='text-white'>Notifikasi</button>
                </li>

                <li>
                  <Link
                    href='/profile'
                    className='text-white'
                    onClick={handleMenuItemClick}
                  >
                    Profil Saya
                  </Link>
                </li>
                <li>
                  <Link
                    href='/riwayat'
                    className='text-white'
                    onClick={handleMenuItemClick}
                  >
                    Riwayat
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pengaturan'
                    className='text-white'
                    onClick={handleMenuItemClick}
                  >
                    Pengaturan
                  </Link>
                </li>
                <li>
                  <Link
                    href='/'
                    onClick={() => {
                      removeToken();
                      handleMenuItemClick();
                    }}
                    className='text-red-600'
                  >
                    Keluar
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href='/masuk'
                    className='border border-agro-light-yellow text-white w-full block p-4 text-center py-2'
                    onClick={handleMenuItemClick}
                  >
                    Masuk
                  </Link>
                </li>
                <li>
                  <Link
                    href='/daftar'
                    className='bg-agro-light-yellow border border-agro-light-yellow text-black w-full block p-4 text-center py-2'
                    onClick={handleMenuItemClick}
                  >
                    Daftar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
