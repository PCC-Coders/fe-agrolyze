"use client";

import ArticleItem from "@/components/atoms/ArticleItem";
import {articles} from "@/data";
import {useEffect, useState} from "react";

const ArticleSection = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);
        const {data} = await response.json();
        setArticle(data);
      } catch (error) {
        setError("Gagal dalam mengambil data artikel");
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return (
      <div className='p-8 bg-agro-dark-green text-white'>
        <p className='text-center text-lg font-semibold '>{error}</p>
      </div>
    );
  }

  return (
    <section className='bg-agro-dark-green text-white '>
      <div className='p-8 lg:p-24 container mx-auto'>
        <h2 className='text-2xl lg:text-3xl text-center mb-14 font-bold'>
          Berita & Artikel
        </h2>
        <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
          {articles.slice(0, 3).map((article, index) => (
            <ArticleItem {...article} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleSection;
