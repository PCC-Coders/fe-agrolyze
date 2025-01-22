"use client";

import {useEffect, useState} from "react";
import CardContent from "./CardContent";
import data from "./CardData";

export default function CardDiscussion() {
  const [discusses, setDiscusses] = useState([]);
  const [errorDiscussion, setErrorDiscussion] = useState(null);

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/discusses`);
        const {data} = await response.json();
        setDiscusses(data);
      } catch (error) {
        setErrorDiscussion("Gagal dalam mengambil data diskusi");
      }
    };

    fetchDiscussion();
  });
  return (
    <div className='space-y-4'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-agro-light-gray p-4 rounded-lg shadow-md max-w-3xl'
        >
          <CardContent {...item} />
        </div>
      ))}
    </div>
  );
}
