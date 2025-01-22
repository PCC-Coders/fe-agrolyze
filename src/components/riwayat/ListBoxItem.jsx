import {useState} from "react";
import Image from "next/image";
import {formattedDate} from "@/lib/utils";

export default function ListBoxItem({
  image,
  similar_image,
  name,
  date,
  result,
  explaination,
  treatment,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='flex flex-col sm:flex-row items-start sm:items-center bg-agro-light-gray rounded-lg p-4 shadow-sm mb-4'>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='object-cover rounded-md mb-4 sm:mb-0 sm:mr-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20'
        />
        <div className='flex-1'>
          <h3 className='text-base sm:text-lg lg:text-xl font-medium'>
            {name}
          </h3>
          <p className='text-xs sm:text-sm lg:text-base text-gray-600'>
            {formattedDate(date)}
          </p>
          <p className='text-xs sm:text-sm lg:text-base text-gray-600 mb-2'>
            Probabilitas: {result}
          </p>
          <div className='block sm:hidden mt-2'>
            <button
              onClick={toggleModal}
              className='w-full px-4 py-2 rounded-lg bg-agro-light-yellow text-xs sm:text-sm lg:text-base'
            >
              Lihat selengkapnya
            </button>
          </div>
        </div>
        <div className='hidden sm:block'>
          <button
            onClick={toggleModal}
            className='px-4 py-2 rounded-lg bg-agro-light-yellow text-xs sm:text-sm lg:text-base'
          >
            Lihat selengkapnya
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className='h-screen overflow-auto p-2 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg sm:text-xl font-bold'>{name}</h2>
              <button
                onClick={toggleModal}
                className='text-gray-500 hover:text-gray-700'
              >
                ✖
              </button>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className='h-[100px] md:h-[250px] object-cover rounded-md mb-4'
              />
              {similar_image && (
                <Image
                  src={similar_image}
                  alt={name}
                  width={400}
                  height={400}
                  className='h-[100px] md:h-[250px] object-cover rounded-md mb-4'
                />
              )}
            </div>
            <div className='flex gap-8 items-center'>
              <p className='text-sm sm:text-base text-gray-600 mb-4'>
                {formattedDate(date)}
              </p>
              <p className='text-sm sm:text-base text-gray-600 mb-4'>
                Probabilitas: {result}
              </p>
            </div>
            <p className='text-sm sm:text-base text-gray-800'>
              {explaination && explaination}
            </p>
            {treatment && (
              <>
                <h4 className='text-lg font-bold text-gray-800 mt-4'>
                  Pengobatan:
                </h4>
                <div className='text-sm text-gray-600 grid gap-2'>
                  <p>
                    <strong>Pengobatan Kimia:</strong>{" "}
                    {treatment.chemical_treatment}
                  </p>
                  <p>
                    <strong>Pengobatan Biologis:</strong>{" "}
                    {treatment.biological_treatment}
                  </p>
                  <p>
                    <strong>Prevensi:</strong> {treatment.prevention_treatment}
                  </p>
                </div>
              </>
            )}
            <div className='flex justify-end mt-4'>
              <button
                onClick={toggleModal}
                className='px-4 py-2 rounded-lg bg-agro-light-yellow text-sm sm:text-base'
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
