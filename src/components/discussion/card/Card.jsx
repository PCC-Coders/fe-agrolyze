"use client";

import {useEffect, useState} from "react";
import CardContent from "./CardContent";
import data from "./CardData";
import {API_DEV_URL} from "@/lib/config";
import {getToken} from "@/lib/auth";
import Skeleton from "@/components/atoms/flowbite/Skeleton";
import Link from "next/link";

export default function CardDiscussion() {
  const [discusses, setDiscusses] = useState([]);
  const [errorDiscussion, setErrorDiscussion] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = getToken();

  useEffect(() => {
    const fetchDiscussion = async () => {
      if (!token) {
        setErrorDiscussion("Token tidak tersedia");
        return;
      }

      try {
        const response = await fetch(`${API_DEV_URL}/discusses`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {data} = await response.json();

        setDiscusses(data.data);
      } catch (error) {
        setErrorDiscussion(
          error.message || "Gagal dalam mengambil data diskusi"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDiscussion();
  }, [token]);

  if (errorDiscussion) {
    return (
      <div className='p-4 bg-red-100 text-red-600 rounded-lg'>
        <p>{errorDiscussion}</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <ul className='grid gap-4'>
        {loading &&
          Array.from({length: 5}).map((_, index) => (
            <Skeleton className={"bg-agro-dark-green h-52"} key={index} />
          ))}
      </ul>
      {discusses.map((item, index) => (
        <Link
          href={`/diskusi/${item.slug}` ?? ""}
          key={index}
          className='block bg-agro-light-gray p-4 rounded-lg shadow-md'
        >
          <CardContent {...item} />
        </Link>
      ))}
    </div>
  );
}
