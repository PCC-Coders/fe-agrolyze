import Image from "next/image";
import {categories} from "@/data";
import CategoryItem from "../atoms/CategoryItem";

const CategorySection = () => {
  return (
    <section className='bg-agro-light-green text-white relative'>
      <div className='md:flex gap-8'>
        <Image src='/images/petani.png' alt='Petani' width={600} height={600} />
        <div>
          <h2 className='text-2xl lg:text-3xl text-center font-bold my-16'>
            <span className='text-agro-yellow'>Kategori</span> Tanaman di
            Indonesia
          </h2>
          <div className='grid md:grid-cols-2 gap-8 items-center px-6 md:px-0'>
            {categories.map((category) => (
              <CategoryItem key={category.title} {...category} />
            ))}
          </div>
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
