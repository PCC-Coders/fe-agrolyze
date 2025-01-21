"use client";

import React, {useState} from "react";
import Image from "next/image";
import {FiImage} from "react-icons/fi";

export default function CreateDiscussion() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePost = () => {
    if (text || image) {
      // Add posting logic here
      alert("Discussion posted!");
    } else {
      alert("Please add text or an image before posting.");
    }
  };

  return (
    <div className='bg-agro-light-gray p-4 rounded-lg shadow-md w-full'>
      <div className='flex items-start gap-2 md:gap-4'>
        {/* Foto Profil */}
        <div className='w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden'>
          <Image
            src='/images/foto_profil.svg'
            alt='Profile Picture'
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Input Text */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Apa yang ingin Anda diskusikan?'
          className='bg-agro-light-gray flex-1 rounded-lg p-2 text-sm resize-none border-none focus:ring-0 sm:text-base'
          rows={2}
        />
      </div>

      {/* Preview Gambar */}
      {image && (
        <div className='mt-4 relative'>
          <Image
            src={image}
            alt='Uploaded Preview'
            width={250}
            height={250}
            className='w-full h-auto rounded-lg object-cover'
          />
          <button
            className='absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-lg'
            onClick={() => setImage(null)}
          >
            Hapus
          </button>
        </div>
      )}

      {/* Footer */}
      <div className='flex items-center justify-end mt-4 gap-4'>
        {/* Upload Gambar */}
        <div className='relative'>
          <input
            type='file'
            accept='image/*'
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
            onChange={handleImageUpload}
          />
          <FiImage
            size={28}
            className='text-gray-600 cursor-pointer sm:text-2xl md:text-3xl'
          />
        </div>

        {/* Tombol Posting */}
        <button
          onClick={handlePost}
          className='bg-agro-light-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-agro-green focus:outline-none focus:ring focus:ring-blue-300 sm:px-6 sm:py-3 sm:text-base'
        >
          Posting
        </button>
      </div>
    </div>
  );
}
