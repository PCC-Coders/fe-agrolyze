"use client";

import {useEffect, useState} from "react";
import CardContent from "./CardContent";
import data from "./CardData";
import {API_DEV_URL} from "@/lib/config";
import {getToken} from "@/lib/auth";

export default function CardDiscussion() {
  const [discusses, setDiscusses] = useState([]);
  const [errorDiscussion, setErrorDiscussion] = useState(null);
  const token = getToken();
  console.log(discusses);

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
        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {data} = await response.json();

        setDiscusses(data.data);
      } catch (error) {
        setErrorDiscussion(
          error.message || "Gagal dalam mengambil data diskusi"
        );
      }
    };

    fetchDiscussion();
  }, [token]);

  return (
    <div className='space-y-4'>
      {discusses.map((item, index) => (
        <div
          key={index}
          className='bg-agro-light-gray p-4 rounded-lg shadow-md'
        >
          <CardContent {...item} />
        </div>
      ))}
    </div>
  );
}
