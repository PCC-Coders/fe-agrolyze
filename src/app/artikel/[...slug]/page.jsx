import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";

const DetailArtikel = () => {
  return (
    <section className='bg-agro-dark-green text-white p-8 lg:p-16'>
      <Link href='/artikel' className='flex items-center mb-12'>
        <MdKeyboardArrowLeft className='text-3xl' />
        Kembali
      </Link>
      <div className='grid gap-8'>
        <div className='grid gap-8'>
          <div>
            <h2 className='text-3xl font-bold'>
              Override the digital divide with additional
            </h2>
            <p className='text-gray-400 font-semibold text-lg'>
              Ditulis oleh Seno
            </p>
            <p className='text-gray-400 text-sm'>12 Agustus 2021</p>
          </div>
          <Image
            src='/images/petani.png'
            alt='Gambar'
            width={500}
            height={500}
            className='rounded-lg w-full h-[500px] object-cover'
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          reiciendis eius mollitia expedita rem inventore labore, dolorem veniam
          assumenda debitis deleniti dolore dolores sed illo suscipit repellat
          doloribus in laborum corrupti soluta ab iste culpa quam. Unde
          accusamus molestias magnam! Nemo cumque et cum eaque impedit delectus
          laborum voluptatum, rem omnis, repudiandae quos blanditiis totam
          explicabo debitis nobis dolore nesciunt at nostrum exercitationem
          quibusdam. Necessitatibus tempore voluptatibus beatae, dolor eos
          dignissimos repellat numquam vel, sapiente magnam, temporibus a
          laboriosam quia pariatur inventore illum. Cum assumenda dolorem
          obcaecati asperiores, ipsum ad est consequuntur soluta laudantium
          voluptatum error in eum dolor, ea officia maiores repellendus deleniti
          ut, quia quos aliquam culpa. Debitis aliquid perferendis neque
          consequatur optio delectus reprehenderit. Quo vero doloremque
          perferendis culpa tempora vitae, ducimus in, voluptates deserunt cum,
          quibusdam mollitia architecto necessitatibus sed illo aut pariatur
          accusamus unde harum est recusandae consequuntur praesentium quam
          animi. Accusantium dignissimos eum unde voluptatem mollitia maiores,
          maxime molestiae accusamus eaque fugit rem doloremque quae minima sit.
          Nam hic officiis cupiditate est provident. Fugiat nisi quidem quisquam
          accusamus quis aspernatur debitis a harum quo, sint deleniti earum
          suscipit quam autem culpa labore, facilis, numquam minus ea rerum
          obcaecati impedit exercitationem. Quos qui repellendus beatae.
        </div>
      </div>
    </section>
  );
};

export default DetailArtikel;
