"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import {IoSendOutline} from "react-icons/io5";
import {timeAgo} from "@/lib/utils";
import {getToken} from "@/lib/auth";
import {API_DEV_URL, PUBLIC_STORAGE_URL} from "@/lib/config";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";

export default function CardDetail({
  user,
  title,
  content,
  created_at,
  imageUrl,
  discuss_comments,
  id,
}) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(discuss_comments || []);
  const [isClient, setIsClient] = useState(false);

  // Function to handle post comment
  const handlePostComment = async () => {
    if (comment.trim()) {
      try {
        const res = await fetch(`${API_DEV_URL}/discusses/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({comment, discus_id: id}),
        });

        if (res.ok) {
          const {data: newComment} = await res.json();

          if (
            newComment &&
            newComment.id &&
            newComment.comment &&
            newComment.created_at
          ) {
            setCommentList((prev) => [
              {
                id: newComment.id,
                comment: newComment.comment,
                created_at: newComment.created_at,
                user: newComment.user || {
                  id: user.id,
                  name: user.name,
                  image: user.image,
                },
              },
              ...prev,
            ]);
          }
          setComment(""); // Kosongkan input
        } else {
          const error = await res.json();
          console.error("Failed to post comment:", error);
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
    setCommentList(discuss_comments || []);
  }, [discuss_comments]);

  if (!isClient) return null;

  return (
    <div className='p-10 bg-agro-light-gray rounded-lg'>
      <Link href='/diskusi' className='flex items-center mb-8'>
        <MdKeyboardArrowLeft className='text-3xl' />
        Kembali
      </Link>

      <div className='flex items-start gap-2 md:gap-4 mb-4'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          <Image
            src={user?.image || "/images/foto_profil.svg"}
            alt='Profile Picture'
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex items-baseline mb-2'>
            <p className='text-sm sm:text-base font-semibold mr-1'>
              @{user?.name}
            </p>
            <p className='text-xs sm:text-sm text-gray-500'>
              {timeAgo(created_at)}
            </p>
          </div>
          <div className='grid mb-2'>
            {title && <h2 className='text-lg font-semibold'>{title}</h2>}
            {content && (
              <p className='text-base text-gray-600'>
                {content.substring(0, 300)}
              </p>
            )}
          </div>

          {imageUrl && (
            <div className='mb-4'>
              <Image
                src={`${PUBLIC_STORAGE_URL}/uploads/discusses/${imageUrl}`}
                alt='Post Image'
                width={1000}
                height={1000}
                className='w-[400px] h-auto rounded-lg object-cover'
              />
            </div>
          )}
        </div>
      </div>

      {/* Komentar */}
      <div className='grid gap-2 bg-gray-200 px-4 p-3 rounded-lg'>
        {commentList.length > 0 ? (
          commentList.map((commentItem, index) => (
            <div key={index} className='flex items-start gap-2 md:gap-4 mb-4'>
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <Image
                  src={commentItem.user?.image || "/images/foto_profil.svg"}
                  alt='Profile Picture'
                  width={100}
                  height={100}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <div className='flex items-baseline mb-2'>
                  <p className='text-sm sm:text-base font-semibold mr-1'>
                    @{commentItem.user?.name || "Anonymous"}
                  </p>
                  <p className='text-xs sm:text-sm text-gray-500'>
                    {timeAgo(commentItem.created_at)}
                  </p>
                </div>
                <p className='text-base text-gray-600'>{commentItem.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>Belum ada komentar.</p>
        )}
      </div>

      {/* Form untuk komentar */}
      <div className='flex gap-4 justify-between mt-5'>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Berikan komentar Anda...'
          className='w-full bg-gray-200 flex-1 rounded-lg text-sm resize-none border-none focus:ring-0 sm:text-base'
          rows={2}
        />
        <button
          onClick={handlePostComment}
          className='bg-agro-light-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-agro-green focus:outline-none focus:ring focus:ring-blue-300 sm:px-6 sm:py-3 sm:text-base'
        >
          <IoSendOutline />
        </button>
      </div>
    </div>
  );
}
