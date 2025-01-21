"use client";

import {useEffect, useState} from "react";
import {getToken} from "@/lib/auth";
import {FileInputFlowbite} from "@/components/atoms/flowbite/FileInput";
import DiseaseSuccessModal from "@/components/popup/DiseaseSuccess";
import {API_BASE_URL, API_DEV_URL} from "@/lib/config";

const PenyakitTanaman = () => {
  const [isClient, setIsClient] = useState(false);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [identificationData, setIdentificationData] = useState(null);
  const token = getToken();

  const [file, setFile] = useState(null);

  const [popupMessage, setPopupMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(`${API_DEV_URL}/plant/disease/guest`);

  const handlePostIdentification = async () => {
    setLoading(true);

    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("address", address);

    try {
      const userOrGuestApiUrl = token
        ? "plant/disease/user"
        : "plant/disease/guest";

      const response = await fetch(`${API_DEV_URL}/${userOrGuestApiUrl}`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setPopupMessage(
          result.message || "Identifikasi penyakit tanaman berhasil!"
        );
        setIsModalOpen(true);
        setIdentificationData(result.data);
      } else {
        setPopupMessage(
          result.message || "Gagal mengidentifikasi penyakit tanaman."
        );
        setIsModalOpen(true);
      }
    } catch (err) {
      setPopupMessage("Terjadi kesalahan. Silakan coba lagi.");
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='px-2 min-h-screen grid md:p-20'>
        <div className='grid md:grid-cols-2 gap-2 md:gap-8 items-center'>
          {isClient && (
            <FileInputFlowbite handleFileChange={handleFileChange} />
          )}
          <div>
            <h2 className='text-2xl lg:text-3xl text-center font-bold my-6 md:my-16'>
              Cek <span className='text-agro-yellow'>Penyakit</span> Tanaman
            </h2>
            <div className='grid gap-2'>
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='rounded-lg bg-agro-green'
                placeholder='Masukkan alamat tanaman yang ingin diidentifikasi'
              />
              <button
                onClick={handlePostIdentification}
                className='bg-agro-light-yellow text-agro-green rounded-lg px-4 py-2 mt-4'
                disabled={loading}
              >
                {loading ? "Mengecek..." : "Cek Tanaman"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isClient && (
        <DiseaseSuccessModal
          isOpen={isModalOpen}
          message={popupMessage}
          onClose={closeModal}
          data={identificationData}
        />
      )}
    </section>
  );
};

export default PenyakitTanaman;
