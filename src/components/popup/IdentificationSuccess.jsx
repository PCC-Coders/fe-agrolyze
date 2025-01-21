import Image from "next/image";
import React from "react";

const IdentificationSuccessModal = ({isOpen, onClose, data}) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed p-2 h-auto overflow-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white p-6 rounded-lg max-w-lg mx-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-center text-xl font-semibold text-green-600'>
          {"Identifikasi Informasi Tanaman berhasil!"}
        </h3>

        {data && (
          <div className='mt-4'>
            <h4 className='text-lg font-bold text-gray-800'>Nama Tanaman:</h4>
            <p className='text-sm text-gray-600'>{data.name}</p>

            <h4 className='text-lg font-bold text-gray-800 mt-4'>
              Probabilitas:
            </h4>
            <p className='text-sm text-gray-600'>
              {(data.probability * 100).toFixed(2)}%
            </p>

            <div className='flex flex-col md:flex-row gap-0 md:gap-4'>
              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Tanaman:
                </h4>
                <Image
                  src={data.image}
                  alt={data.name}
                  width={400}
                  height={400}
                  className='w-full h-[100px] md:h-[200px] object-cover rounded-lg mt-2'
                />
              </div>

              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Serupa:
                </h4>
                <Image
                  src={data.similar_images}
                  alt='Gambar Serupa'
                  width={400}
                  height={400}
                  className='w-full h-[100px] md:h-[200px] object-cover rounded-lg mt-2'
                />
              </div>
            </div>
            <div className='grid'>
              <h4 className='text-lg font-bold text-gray-800 mt-4'>
                Penjelasan:
              </h4>
              <p className='text-sm text-gray-600'>{data.explanation}</p>
            </div>
          </div>
        )}

        <button
          className='mt-4 px-4 py-2 bg-green-600 text-white rounded-full w-full'
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default IdentificationSuccessModal;
