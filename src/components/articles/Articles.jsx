"use client";

import { use, useEffect, useState } from "react";
import ArticleItem from "@/components/atoms/ArticleItem";
import { API_BASE_URL, API_DEV_URL } from "@/lib/config";
import Skeleton from "../atoms/flowbite/Skeleton";
import PaginationFlowbite from "../atoms/flowbite/Pagination";
import { Pagination } from "flowbite-react";

export default function Articles({ initialArticles = [], initialTotalPages = 1 }) {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  useEffect(() => {
    const fetchArticles = async (page) => {
      setLoading(true);
      try {
        const response = await fetch(`${API_DEV_URL}/post?page=${page}`, {
          cache: "no-store",
        });
        const { data } = await response.json();
        setArticles(data.data || []);
        setTotalPages(data.last_page || 1);
      } catch (error) {
        console.error("Gagal mengambil data artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles(currentPage);
  }, [currentPage]);

  const filteredArticles = articles.filter((article) => {
    const title = article.title || "";
    const content = article.content || "";
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-2 lg:p-16 grid gap-8'>
        <input
          type='text'
          className='w-full rounded-lg p-3 text-black'
          placeholder='Cari berita atau artikel'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          {loading ? (
            <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
              {[...Array(6)].map((_, index) => (
                <Skeleton color={"bg-agro-green"} key={index} />
              ))}
            </ul>
          ) : filteredArticles.length > 0 ? (
            <ul className='grid lg:grid-cols-3 gap-8 items-center px-4'>
              {filteredArticles.map((article, index) => (
                <ArticleItem {...article} key={index} />
              ))}
            </ul>
          ) : (
            <p className='text-center col-span-3'>Artikel tidak ditemukan</p>
          )}
        </div>

        <div className=' flex overflow-x-auto sm:justify-center'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      </div>
    </section>
  );
}
