import {articles} from "@/data";
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";

const getArticleBySlug = async (slug) => {
  return articles.find((article) => article.slug == slug);
};

const DetailArtikel = async ({params}) => {
  const {slug} = params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <div className='bg-agro-dark-green text-white text-center font-semibold p-20'>
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <section className='bg-agro-dark-green text-white p-8 lg:p-16'>
      <Link href='/artikel' className='flex items-center mb-12'>
        <MdKeyboardArrowLeft className='text-3xl' />
        Kembali
      </Link>
      <div className='grid gap-8'>
        <div className='grid gap-8'>
          <div>
            <h2 className='text-3xl font-bold'>{article.title}</h2>
            <p className='text-gray-400 font-semibold text-lg'>
              Ditulis oleh {article.author}
            </p>
            <p className='text-gray-400 text-sm'>{article.date}</p>
          </div>
          <Image
            src={article.imageUrl}
            alt='Gambar'
            width={500}
            height={500}
            className='rounded-lg w-full h-[500px] object-cover'
          />
        </div>
        <div>{article.content}</div>
      </div>
    </section>
  );
};

export default DetailArtikel;
