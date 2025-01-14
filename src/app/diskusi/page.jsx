import CategoryItem from "@/components/atoms/CategoryItem";
import {CgProfile} from "react-icons/cg";
import {categories} from "@/data";
import Link from "next/link";

const Diskusi = () => {
  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-8 lg:p-16 flex flex-col-reverse md:flex-row gap-8'>
        <div className='w-full flex flex-col gap-4'>
          <div className='bg-white rounded-lg p-8 h-40'>
            <div className='flex items-center gap-4'>
              <CgProfile className='text-4xl text-agro-green' />
              <input
                type='text'
                name='post'
                placeholder='Tulis disini...'
                className='w-full rounded-lg outline-none ring-inherit text-black'
              />
            </div>
            <div className='flex justify-end'>
              <button className='bg-agro-green text-white rounded-lg px-4 py-2 mt-4'>
                Post
              </button>
            </div>
          </div>
          <div className='bg-white text-black rounded-lg p-8 grid gap-8'>
            <div>
              <div className='flex items-center gap-4'>
                <CgProfile className='text-4xl text-agro-green' />
                <div>
                  <h3 className='text-lg font-bold '>Nama User</h3>
                  <p className='text-sm text-gray-400'>12 Agustus 2021</p>
                </div>
              </div>
              <Link href='#'>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quis lorem ut libero malesuada feugiat. Nulla porttitor
                  accumsan tincidunt. Curabitur arcu erat
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-white text-black w-full lg:w-1/2 rounded-lg p-8'>
          <h3 className='text-2xl font-bold mb-8'>Kategori</h3>
          <ul className='grid gap-4 items-center px-6 md:px-0'>
            {categories.map((category) => (
              <CategoryItem key={category.title} {...category} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Diskusi;
