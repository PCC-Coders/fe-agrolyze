"use client";

import {useState} from "react";
import Image from "next/image";
import Profil from "@/components/settings/profil";
import GantiPassword from "@/components/settings/ganti-password";
import BackButton from "@/components/riwayat/BackButton";
import Title from "@/components/riwayat/Title";

export default function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div className='min-h-screen bg-agro-green py-6 px-6 md:px-10 lg:px-16'>
      {/* Header */}
      <BackButton />
      <Title text='Pengaturan Saya' />

      {/* Layout */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Sidebar */}
        <div className='md:w-1/4'>
          <ul className='space-y-3'>
            {/* Menu Profil */}
            <li
              className={`flex items-center p-2 cursor-pointer text-sm md:text-base ${
                activeTab === "profil"
                  ? "border-l-4 border-white text-white"
                  : "border-l-4 border-transparent text-white"
              }`}
              onClick={() => setActiveTab("profil")}
            >
              <Image
                src='/images/icon_profil.svg'
                alt='Icon Profil'
                width={100}
                height={100}
                className='w-6 h-6 md:w-8 md:h-8 mr-2 ml-4'
              />
              Profil
            </li>

            {/* Menu Ganti Password */}
            <li
              className={`flex items-center p-2 cursor-pointer text-sm md:text-base ${
                activeTab === "password"
                  ? "border-l-4 border-white text-white"
                  : "border-l-4 border-transparent text-white"
              }`}
              onClick={() => setActiveTab("password")}
            >
              <Image
                src='/images/key.svg'
                alt='Icon Password'
                width={100}
                height={100}
                className='w-5 h-5 md:w-6 md:h-6 mr-2 ml-4'
              />
              Reset Password
            </li>
          </ul>
        </div>

        {/* Konten Utama */}
        <div className='md:w-3/4 bg-white p-6 rounded-lg shadow md:hidden'>
          {activeTab === "profil" && <Profil />}
          {activeTab === "password" && <GantiPassword />}
        </div>

        <div className='hidden md:block md:w-3/4 bg-white p-6 rounded-lg shadow'>
          {activeTab === "profil" && <Profil />}
          {activeTab === "password" && <GantiPassword />}
        </div>
      </div>
    </div>
  );
}
