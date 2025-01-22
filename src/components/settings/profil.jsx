import {useEffect, useState} from "react";
import Image from "next/image";
import {getToken, getUserProfile} from "@/lib/auth";
import {API_DEV_URL} from "@/lib/config";

export default function Profil() {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({name: "", bio: ""});
  const [fotoFile, setFotoFile] = useState(null); // Untuk menyimpan file foto
  const token = getToken();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (token && isClient) {
      getUserProfile()
        .then((data) => {
          setUser(data.data);
          setFormData({
            name: data.data.name || "",
            bio: data.data.bio || "",
          });
        })
        .catch((err) => {
          console.error("Error fetching user profile:", err);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [isClient, token]);

  const handleFotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFotoFile(file); // Simpan file foto ke state
      alert("Foto berhasil dipilih!");
    } else {
      alert("Gambar harus berukuran kurang dari 2MB.");
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSimpan = async () => {
    try {
      // Buat FormData untuk menggabungkan data dan file
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("bio", formData.bio);

      if (fotoFile) {
        formDataToSend.append("image", fotoFile);
      }

      const response = await fetch(`${API_DEV_URL}/auth/profile`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Sertakan token
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedData = await response.json();
      setUser(updatedData.data); // Perbarui data pengguna
      alert("Perubahan telah disimpan!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Gagal menyimpan perubahan.");
    }
  };

  return (
    <div className='py-2 px-6'>
      <h2 className='text-lg md:text-xl font-semibold mb-4'>Profil Pengguna</h2>

      <hr className='mb-4' />

      <div className='flex flex-col md:flex-row items-center gap-8 mb-4'>
        <div className='w-20 h-20 md:w-28 md:h-28 overflow-hidden'>
          <Image
            src={user?.image ?? "/images/foto_profil.svg"}
            alt='Foto Profil'
            width={100}
            height={100}
            className='h-full w-full rounded-full object-cover'
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
            id='image'
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
            Username
          </label>
          <input
            type='text'
            name='name'
            className='w-full p-2 border rounded'
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            className='w-full p-2 border rounded bg-agro-light-gray text-agro-gray'
            value={user?.email || ""}
            readOnly
            disabled
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm md:text-base font-medium mb-2'>
            Tentang Saya
          </label>
          <textarea
            name='bio'
            className='w-full p-2 border rounded'
            rows='4'
            value={formData.bio}
            onChange={handleInputChange}
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
