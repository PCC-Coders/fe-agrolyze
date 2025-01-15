"use client";

import {useState} from "react";
import {getToken} from "@/lib/auth";
import {FileInputFlowbite} from "@/components/atoms/flowbite/FileInput";
import DiseaseSuccessModal from "@/components/popup/DiseaseSuccess";

const PenyakitTanaman = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);
  const [identificationData, setIdentificationData] = useState(null);
  const token = getToken();

  const [file, setFile] = useState(null);

  const [popupMessage, setPopupMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostIdentification = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);

    if (file) {
      formData.append("image", file);
    }

    if (!token) {
      setPopupMessage("Silakan login terlebih dahulu.");
      setIsModalOpen(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/plant/disease/guest",
        {
          method: "POST",
          body: formData,
        }
      );

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

  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-20'>
        <div className='grid md:grid-cols-2 gap-2 md:gap-8 items-center'>
          <FileInputFlowbite handleFileChange={handleFileChange} />
          <div>
            <h2 className='text-2xl lg:text-3xl text-center font-bold my-6 md:my-16'>
              Cek <span className='text-agro-yellow'>Penyakit</span> Tanaman
            </h2>
            <div className='grid gap-2'>
              <input
                type='text'
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className='rounded-lg bg-agro-green'
                placeholder='Masukkan Garis Lintang (Latitude)'
              />
              <input
                type='text'
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className='rounded-lg bg-agro-green'
                placeholder='Masukkan Garis Bujur (Longitude)'
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

      <DiseaseSuccessModal
        isOpen={isModalOpen}
        message={popupMessage}
        onClose={closeModal}
        data={identificationData}
      />
    </section>
  );
};

export default PenyakitTanaman;
