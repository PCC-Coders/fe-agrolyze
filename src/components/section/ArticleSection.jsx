import ArticleItem from "@/components/atoms/ArticleItem";
import {articles} from "@/data";

const ArticleSection = () => {
  return (
    <section className='bg-agro-dark-green text-white '>
      <div className='p-8 lg:p-24 container mx-auto'>
        <h2 className='text-2xl lg:text-3xl text-center mb-20 font-bold'>
          Berita & Artikel
        </h2>
        <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
          {articles.map((article, index) => (
            <ArticleItem {...article} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleSection;
