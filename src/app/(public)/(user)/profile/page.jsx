"use client";

import CommentProfile from "@/components/profile/CommentProfile";
import PostProfile from "@/components/profile/PostProfile";
import {getToken, getUserProfile} from "@/lib/auth";
import {simpleFormattedDate} from "@/lib/utils";
import {useEffect, useState} from "react";
import {API_DEV_URL, PUBLIC_STORAGE_URL} from "@/lib/config";
import Image from "next/image";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const token = getToken();
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    if (token) {
      getUserProfile()
        .then((data) => {
          setUser(data.data);
        })
        .catch((err) => {
          console.error("Error fetching user profile:", err);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [token]);

  useEffect(() => {
    async function fetchData() {
      if (!user) return;
      const endpoint =
        activeTab === "posts"
          ? `${API_DEV_URL}/discusses/user/${user.id}?per_page=5`
          : `${API_DEV_URL}/discusses/comments/user/${user.id}`;

      try {
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        const {data} = await response.json();
        if (data) {
          activeTab === "posts" ? setPosts(data.data) : setComments(data.data);
        } else {
          activeTab === "posts" ? setPosts([]) : setComments([]);
        }
      } catch (error) {
        console.error(`Error fetching ${activeTab}:`, error);
      }
    }

    fetchData();
  }, [user, activeTab]);

  console.log(comments);

  return (
    <div className='min-h-screen bg-green-900'>
      {/* Header */}
      <div className='bg-black text-white p-6 flex items-center'>
        <div className='w-24 h-24 bg-gray-400 rounded-full flex-shrink-0'>
          <Image
            src={user?.image ?? "/images/foto_profil.svg"}
            alt='Foto'
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>
        <div className='ml-6'>
          <h1 className='text-2xl font-bold'>{user?.name}</h1>
          <p className='text-gray-400'>@{user?.name}</p>
          <p className='text-gray-400'>
            Bergabung sejak {simpleFormattedDate(user?.created_at)}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className='bg-green-800 text-white px-6'>
        <div className='flex space-x-4 border-b border-blue-400'>
          <button
            className={`py-3 px-4 ${
              activeTab === "posts"
                ? "border-b-4 border-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Postingan
          </button>
          <button
            className={`py-3 px-4 ${
              activeTab === "replies"
                ? "border-b-4 border-yellow-400 font-semibold"
                : "hover:text-yellow-400"
            }`}
            onClick={() => setActiveTab("replies")}
          >
            Balasan
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <ul className='grid gap-2'>
          {activeTab === "posts" ? (
            posts?.length > 0 ? (
              posts.map((post) => <PostProfile {...post} key={post.slug} />)
            ) : (
              <p className='text-white'>Tidak ada postingan yang dibuat</p>
            )
          ) : activeTab === "replies" ? (
            comments?.length > 0 ? (
              comments.map((comment) => (
                <CommentProfile {...comment} key={comment.id} />
              ))
            ) : (
              <p className='text-white'>Tidak ada komentar yang dibuat</p>
            )
          ) : null}
        </ul>
      </div>
    </div>
  );
}
