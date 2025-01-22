"use client";

import {getToken} from "@/lib/auth";
import {useState} from "react";
import {IoSendOutline} from "react-icons/io5";

export default function GantiPassword() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = async () => {
    if (!email.trim()) {
      try {
        const response = await fetch(`${API_DEV_URL}/auth/reset-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({email}),
        });

        if (!response.ok) {
          const {message} = await response.json();
          console.error("Gagal mengirim email reset password:", message);
          return;
        }
      } catch (error) {}
    }
  };

  return (
    <div className='py-4 px-6 md:py-6 md:px-10'>
      <h2 className='text-lg md:text-xl font-semibold mb-4'>Reset Password</h2>
      <div className='mb-4 w-full flex gap-2'>
        <div className='w-full h-auto'>
          <div className='relative'>
            <input
              type='email'
              className='w-full p-2 md:p-3 border rounded pr-10'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Masukkan email untuk menerima kode verifikasi'
            />
          </div>
        </div>
        <button
          type='submit'
          className='px-4 py-2 md:px-6 md:py-3 bg-agro-green text-white rounded hover:bg-agro-dark-green'
        >
          <IoSendOutline />
        </button>
      </div>
    </div>
  );
}
