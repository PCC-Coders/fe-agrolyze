"use client";

import React, {useState} from "react";
import Image from "next/image";
import {FiHeart, FiMessageCircle, FiBookmark} from "react-icons/fi";

export default function CardContent({
  user,
  title,
  content,
  timeAgo,
  imageUrl,
  likes,
  comments,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      {/* Header */}
      <div className='flex items-start gap-2 md:gap-4 mb-4'>
        <div className='w-10 h-10 rounded-full overflow-hidden'>
          {/* Foto Profil */}
          <div className='w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden'>
            <Image
              src='/images/foto_profil.svg'
              alt='Profile Picture'
              width={100}
              height={100}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex items-baseline mb-2'>
            <p className='text-sm sm:text-base font-medium mr-1'>
              {user?.name}
            </p>
            <p className='text-xs sm:text-sm text-gray-500'>{timeAgo}</p>
          </div>
          <div className='grid mb-2'>
            {title && <h2 className='text-lg font-semibold'>{title}</h2>}
            {content && (
              <p className='text-sm text-gray-600'>
                {content.substring(0, 50)}
              </p>
            )}
          </div>

          {imageUrl && (
            <div className='mb-4'>
              <Image
                src={imageUrl}
                alt='Post Image'
                width={100}
                height={100}
                className='w-[300px] h-auto rounded-lg object-cover'
              />
            </div>
          )}

          {/* Actions */}
          <div className='flex items-center gap-4 text-gray-600'>
            <button className='flex items-center hover:text-red-500'>
              <FiHeart size={20} className='mr-1 sm:text-lg md:text-xl' />
              <span className='text-sm sm:text-base'>{likes || 0}</span>
            </button>
            <button className='flex items-center hover:text-blue-500'>
              <FiMessageCircle
                size={20}
                className='mr-1 sm:text-lg md:text-xl'
              />
              <span className='text-sm sm:text-base'>{comments || 0}</span>
            </button>
            <button
              onClick={handleBookmarkClick}
              className={`hover:text-yellow-500 ${
                isBookmarked ? "text-blue-500" : ""
              }`}
            >
              <FiBookmark size={20} className='sm:text-lg md:text-xl' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
