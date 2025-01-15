"use client";

import {useState} from "react";
import {articles} from "@/data";
import ArticleItem from "@/components/atoms/ArticleItem";

const Artikel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-8 lg:p-16 grid gap-8'>
        <input
          type='text'
          className='w-full rounded-lg p-4 text-black'
          placeholder='Cari berita atau artikel'
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <ArticleItem {...article} key={index} />
            ))
          ) : (
            <p className='text-center col-span-3'>Artikel tidak ditemukan</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Artikel;
