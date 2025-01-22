"use client";

import React, {useState} from "react";
import Image from "next/image";
import {FiHeart, FiMessageCircle, FiBookmark} from "react-icons/fi";
import {timeAgo} from "@/lib/utils";
import {PUBLIC_STORAGE_URL} from "@/lib/config";

export default function CardContent({
  user,
  title,
  content,
  created_at,
  imageUrl,
  likes,
  slug,
  discuss_comments,
}) {
  return (
    <>
      {/* Header */}
      <div className='flex items-start gap-2 md:gap-4 mb-4'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          {/* Foto Profil */}
          <div className='w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden'>
            <Image
              src={user?.image}
              alt='Profile Picture'
              width={100}
              height={100}
              className='w-full h-full object-cover'
            />
          </div>
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
                alt={slug}
                width={1000}
                height={1000}
                className='w-[400px] h-auto rounded-lg object-cover'
              />
            </div>
          )}

          {/* Actions */}
          <div className='flex items-center gap-4 text-gray-600'>
            {/* <button className='flex items-center hover:text-red-500'>
              <FiHeart size={20} className='mr-1 sm:text-lg md:text-xl' />
              <span className='text-sm sm:text-base'>{likes || 0}</span>
            </button> */}
            <button className='flex items-center hover:text-blue-500'>
              <FiMessageCircle
                size={20}
                className='mr-1 sm:text-lg md:text-xl'
              />
              <span className='text-sm sm:text-base'>
                {discuss_comments[0]?.count || 0}
              </span>
            </button>
            {/* <button
              onClick={handleBookmarkClick}
              className={`hover:text-yellow-500 ${
                isBookmarked ? "text-blue-500" : ""
              }`}
            >
              <FiBookmark size={20} className='sm:text-lg md:text-xl' />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
