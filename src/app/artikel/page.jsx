import ArticleItem from "@/components/atoms/ArticleItem";
import {articles} from "@/data";

const Artikel = () => {
  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-8 lg:p-16 grid gap-8'>
        <input
          type='text'
          className='w-full rounded-lg p-4'
          placeholder='Cari berita atau artikel'
        />
        <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
          {articles.map((article, index) => (
            <ArticleItem {...article} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Artikel;
