"use client";

import ArticleItem from "@/components/atoms/ArticleItem";
import {API_BASE_URL, API_DEV_URL} from "@/lib/config";
import {useEffect, useState} from "react";
import Skeleton from "../atoms/flowbite/Skeleton";

const ArticleSection = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_DEV_URL}/post?per_page=3`);
        const {data} = await response.json();
        setArticle(data);
      } catch (error) {
        setError("Gagal dalam mengambil data artikel");
      } finally {
        setLoading(false);
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
    <section className='bg-agro-dark-green text-white py-10'>
      <div className='lg:p-24 container mx-auto'>
        <h2 className='text-2xl lg:text-3xl text-center mb-10 md:mb-20 font-bold'>
          Berita & Artikel
        </h2>
        <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-3'>
          {loading &&
            Array.from({length: 3}).map((_, index) => <Skeleton key={index} />)}
          {article.slice(0, 3).map((article, index) => (
            <ArticleItem {...article} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticleSection;
