"use client";

import React, {useEffect, useState} from "react";
import BackButton from "@/components/riwayat/BackButton";
import Title from "@/components/riwayat/Title";
import ListBox from "@/components/riwayat/ListBox";
import {API_DEV_URL} from "@/lib/config";
import {getToken} from "@/lib/auth";
import Link from "next/link";

export default function HistoryPage() {
  const [category, setCategory] = useState("Tanaman");
  const [historyData, setHistoryData] = useState([]);

  const fetchHistory = async (category) => {
    try {
      const endpoint =
        category === "Tanaman"
          ? `${API_DEV_URL}/plant/identification/user?per_page=5`
          : `${API_DEV_URL}/plant/disease/user?per_page=5`;

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const result = await response.json();
      setHistoryData(result.data || []);
    } catch (error) {
      console.error(`Error fetching ${category} history:`, error);
      setHistoryData([]);
    }
  };

  useEffect(() => {
    fetchHistory(category);
  }, [category]);

  console.log(historyData);

  return (
    <div className='py-6 px-10 md:px-16 lg:px-20 bg-agro-green'>
      <Link href='/deteksi/jenis-tanaman'>
        <BackButton />
      </Link>
      <Title text='Riwayat Saya' />
      <div className='flex'>
        <button
          onClick={() => setCategory("Tanaman")}
          className={`px-4 py-2 rounded-t-md text-sm sm:text-base lg:text-lg ${
            category === "Tanaman"
              ? "bg-agro-dark-green text-white"
              : "bg-none text-white"
          }`}
        >
          Jenis Tanaman
        </button>
        <button
          onClick={() => setCategory("Penyakit")}
          className={`px-4 py-2 rounded-t-md text-sm sm:text-base lg:text-lg ${
            category === "Penyakit"
              ? "bg-agro-dark-green text-white"
              : "bg-none text-white"
          }`}
        >
          Penyakit Tanaman
        </button>
      </div>
      {historyData.length > 0 ? (
        <ListBox data={historyData} />
      ) : (
        <p className='text-white p-8'>
          {category === "Tanaman"
            ? "Tidak ada riwayat identifikasi tanaman."
            : "Tidak ada riwayat penyakit tanaman."}
        </p>
      )}
    </div>
  );
}
