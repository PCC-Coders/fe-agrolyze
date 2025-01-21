"use client";

import CreateDiscussion from "@/components/discussion/create";
import CardDiscussion from "@/components/discussion/card/Card";
import CategoryItem from "@/components/atoms/CategoryItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL, API_DEV_URL} from "@/lib/config";
import {getToken} from "@/lib/auth";
import {useRouter} from "next/navigation";

export default function Diskusi() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = getToken();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setPopupMessage("Silakan login terlebih dahulu.");
      setIsModalOpen(true);
    }
  }, [token]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_DEV_URL}/master/post-category`);
        const {data} = response.data;
        setCategories(data);
      } catch (err) {
        setError("Gagal dalam mengambil data kategori");
      }
    };

    fetchCategories();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/masuk");
  };

  return (
    <>
      {/* Main content */}
      <div className='w-full py-8 px-2 md:px-12 bg-agro-green min-h-screen flex flex-col'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='grid  w-full'>
            <div className='mb-3 md:mb-5 w-full'>
              <CreateDiscussion />
            </div>

            <div className='h-[120vh] w-full mr-2 overflow-y-auto space-y-6'>
              <CardDiscussion />
            </div>
          </div>
          <div className='bg-agro-light-gray w-full h-1/2 lg:w-1/3 rounded-lg p-8'>
            <h3 className='text-2xl font-bold mb-8'>Kategori</h3>
            {error ? (
              <div className='p-8 bg-agro-dark-green text-white'>
                <p className='text-center text-lg font-semibold '>{error}</p>
              </div>
            ) : (
              <ul className='grid gap-4 items-center'>
                {categories.map((category) => (
                  <CategoryItem key={category.name} {...category} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h3 className='text-xl font-bold mb-4'>Peringatan</h3>
            <p>{popupMessage}</p>
            <div className='flex justify-end mt-4'>
              <button
                onClick={closeModal}
                className='px-4 py-2 bg-agro-green text-white rounded-md'
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
