"use client";

import CreateDiscussion from "@/components/discussion/create";
import CardDiscussion from "@/components/discussion/card/Card";
import CategoryItem from "@/components/atoms/CategoryItem";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Diskusi() {
  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/master/post-category`
        );
        const {data} = response.data;
        setCategories(data);
      } catch (err) {
        setError("Gagal dalam mengambil data kategori");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className='py-8 px-10 md:px-12 bg-agro-green min-h-screen flex flex-col items-center justify-center'>
      <div className='flex gap-4'>
        <div>
          <div className='mb-3 md:mb-5 w-full max-w-3xl'>
            <CreateDiscussion />
          </div>

          {/* Card Discussion */}
          <div className='h-[120vh] w-full max-w-3xl mr-2 overflow-y-auto space-y-6'>
            <CardDiscussion />
          </div>
        </div>
        <div className='bg-agro-light-gray w-full lg:w-1/3 rounded-lg p-8'>
          <h3 className='text-2xl font-bold mb-8'>Kategori</h3>
          {error ? (
            <div className='p-8 bg-agro-dark-green text-white'>
              <p className='text-center text-lg font-semibold '>{error}</p>
            </div>
          ) : (
            <ul className='grid gap-4 items-center px-6 md:px-0'>
              {categories.map((category) => (
                <CategoryItem key={category.name} {...category} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
