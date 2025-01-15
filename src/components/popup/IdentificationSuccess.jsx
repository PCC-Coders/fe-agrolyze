import React from "react";

const SuccessModal = ({isOpen, message, onClose, data}) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      onClick={onClose}
    >
      <div
        className='bg-white p-6 rounded-lg max-w-lg mx-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-center text-xl font-semibold text-green-600'>
          {message || "Identifikasi Tanaman berhasil!"}
        </h3>

        {data && (
          <div className='mt-4'>
            <h4 className='text-lg font-bold text-gray-800'>Nama Tanaman:</h4>
            <p className='text-sm text-gray-600'>{data.plant_name}</p>

            <h4 className='text-lg font-bold text-gray-800 mt-4'>
              Probabilitas:
            </h4>
            <p className='text-sm text-gray-600'>
              {(data.probability * 100).toFixed(2)}%
            </p>

            <div className='flex gap-4'>
              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Tanaman:
                </h4>
                <img
                  src={data.image}
                  alt={data.plant_name}
                  className='w-full h-auto rounded-lg mt-2'
                />
              </div>

              <div className='mt-4'>
                <h4 className='text-lg font-bold text-gray-800'>
                  Gambar Serupa:
                </h4>
                <img
                  src={data.similar_images}
                  alt='Gambar Serupa'
                  className='w-full h-auto rounded-lg mt-2'
                />
              </div>
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

export default SuccessModal;
