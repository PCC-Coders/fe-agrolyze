"use client";

import CheckEmail from "@/components/forgot-password/CheckEmail";
import ResetPassword from "@/components/forgot-password/ResetPassword";
import Loading from "@/components/loading";
import {API_DEV_URL} from "@/lib/config";
import {useEffect, useState} from "react";

export default function ForgotPassword() {
  const [isComponentAVisible, setIsComponentAVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className='relative min-h-screen bg-cover bg-center'
      style={{backgroundImage: `url('/images/Register.svg')`}}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex items-center justify-center min-h-screen'>
        <div className='bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg p-8 w-[350px]'>
          <h2 className='text-2xl sm:text-4xl font-bold text-agro-dark-green mb-4'>
            Lupa Password
          </h2>
          {isComponentAVisible ? (
            <CheckEmail onSwitch={() => setIsComponentAVisible(false)} />
          ) : (
            <ResetPassword />
          )}
        </div>
      </div>

      {/* Success Login Modal */}
      {/* <SuccessLogin isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
}
