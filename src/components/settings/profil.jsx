import {useEffect, useState} from "react";
import dataProfil from "./data";
import Image from "next/image";
import {getUserProfile} from "@/lib/auth";

export default function Profil() {
  const [user, setUser] = useState(null);
  const {tentangSaya, foto} = dataProfil;

  useEffect(() => {
    getUserProfile()
      .then((res) => setUser(res))
      .catch((err) => err);
  }, []);

  const handleFotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      alert("Foto berhasil diunggah!");
    } else {
      alert("Gambar harus berukuran kurang dari 2MB.");
    }
  };

  const handleSimpan = () => {
    alert("Perubahan telah disimpan!");
  };

  return (
    <div className='py-2 px-6'>
      <h2 className='text-lg md:text-xl font-semibold mb-4'>Profil Pengguna</h2>

      <hr className='mb-4' />

      <div className='flex flex-col md:flex-row items-center gap-8 mb-4'>
        <div className='w-20 h-20 md:w-28 md:h-28 overflow-hidden'>
          <Image
            src={foto}
            alt='Foto Profil'
            width={100}
            height={100}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='text-center md:text-left'>
          <label
            htmlFor='upload-foto'
            className='px-4 py-2 bg-agro-green text-white text-sm md:text-base rounded cursor-pointer hover:bg-agro-dark-green'
          >
            Update Foto
          </label>
          <input
            id='upload-foto'
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleFotoUpload}
          />
          <p className='text-xs md:text-sm text-gray-500 mt-2'>
            Gambar profil disarankan rasio 1:1 dan tidak lebih dari 2MB.
          </p>
        </div>
      </div>

      <form>
        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Nama Lengkap
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded'
            defaultValue={user?.name}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Username
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded'
            defaultValue={user?.name}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            className='w-full p-2 border rounded'
            defaultValue={user?.email}
            readOnly
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Tentang Saya
          </label>
          <textarea
            className='w-full p-2 border rounded'
            rows='4'
            defaultValue={tentangSaya}
          />
        </div>

        <button
          type='button'
          onClick={handleSimpan}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm md:text-base'
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
