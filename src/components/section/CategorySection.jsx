"use client";

import axios from "axios";
import Image from "next/image";
import {useEffect, useState} from "react";
import CategoryItem from "../atoms/CategoryItem";
import {API_BASE_URL, API_DEV_URL} from "@/lib/config";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_DEV_URL}/master/post-category`);
        const data = await response.json();
        setCategories(data.data);
      } catch (err) {
        setError("Gagal dalam mengambil data kategori");
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return (
      <div className='p-8 bg-agro-dark-green text-white'>
        <p className='text-center text-lg font-semibold '>{error}</p>
      </div>
    );
  }

  return (
    <section className='bg-agro-light-green text-white relative pb-8 md:pb-0'>
      <div className='md:flex gap-8'>
        <Image src='/images/petani.png' alt='Petani' width={600} height={600} />
        <div>
          <h2 className='text-2xl lg:text-3xl text-center font-bold my-16'>
            <span className='text-agro-yellow'>Kategori</span> Tanaman di
            Indonesia
          </h2>
          {categories.length === 0 && (
            <p className='text-lg font-semibold'>Tidak ada kategori</p>
          )}
          <ul className='grid lg:grid-cols-2 gap-8 items-center px-6 md:px-0'>
            {categories.map((category) => (
              <CategoryItem key={category.name} {...category} />
            ))}
          </ul>
        </div>
      </div>
      <Image
        src='/images/icon-rumah.png'
        alt='Icon Rumah'
        width={604}
        height={343}
        className='absolute right-0 bottom-0'
      />
    </section>
  );
};

export default CategorySection;
