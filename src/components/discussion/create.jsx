"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {FiImage} from "react-icons/fi";
import {API_DEV_URL} from "@/lib/config";
import {getToken, getUserProfile} from "@/lib/auth";

export default function CreateDiscussion({onNewDiscussion}) {
  const [imageUrl, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Menyimpan file asli
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    getUserProfile()
      .then((data) => setUser(data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Simpan file asli
      setImage(URL.createObjectURL(file)); // Simpan URL untuk preview
    }
  };

  const handlePost = async () => {
    if (!title.trim()) {
      setError(true);
      setMessage("Judul tidak boleh kosong.");
      return;
    }

    if (!content.trim()) {
      setError(true);
      setMessage("Konten tidak boleh kosong.");
      return;
    }

    if (!imageFile) {
      setError(true);
      setMessage("Gambar harus diunggah.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("imageUrl", imageFile); // Gunakan file asli

    try {
      const response = await fetch(`${API_DEV_URL}/discusses`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Gagal untuk melakukan posting.");
      }

      if (onNewDiscussion && typeof onNewDiscussion === "function") {
        onNewDiscussion(result.data);
      }

      // Reset form
      setTitle("");
      setContent("");
      setImage(null);
      setImageFile(null);
      setError(false);
      setMessage("Berhasil memposting diskusi.");
      window.location.reload();
    } catch (error) {
      setError(true);
      setMessage(error.message || "Gagal untuk melakukan posting.");
    }
  };

  if (!isClient) return null;

  return (
    <div className='bg-agro-light-gray p-4 rounded-lg shadow-md w-full'>
      <div className='flex w-full gap-2 md:gap-4'>
        {/* Foto Profil */}
        <div className='w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden'>
          <Image
            src={user?.image || "/images/default-profile.jpg"}
            alt='Profile Picture'
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='grid gap-2 w-full'>
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Judul Diskusi'
            className='font-semibold bg-agro-light-gray flex-1 rounded-lg p-2 text-sm resize-none border-none focus:ring-0 sm:text-base'
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Apa yang ingin Anda diskusikan?'
            className='w-full bg-agro-light-gray flex-1 rounded-lg p-2 text-sm resize-none border-none focus:ring-0 sm:text-base'
            rows={2}
          />
        </div>
      </div>

      {/* Preview Gambar */}
      {imageUrl && (
        <div className='mt-4 relative'>
          <Image
            src={`imageUrl`}
            alt='Uploaded Preview'
            width={250}
            height={250}
            className='w-full h-auto rounded-lg object-cover'
          />
          <button
            className='absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-lg'
            onClick={() => {
              setImage(null);
              setImageFile(null);
            }}
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

      {isError && <p className='text-red-700 mt-2'>{message}</p>}
    </div>
  );
}
