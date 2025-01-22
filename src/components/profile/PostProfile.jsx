import {PUBLIC_STORAGE_URL} from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

const PostProfile = ({imageUrl, user, title, content, slug}) => {
  console.log(user);
  return (
    <li className='flex items-start bg-gray-200 rounded-lg p-4'>
      <Link href={`/diskusi/${slug}`} className='block ml-4 flex-1'>
        <p className='font-semibold'>@{user?.name}</p>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-base mt-1'>{content.substring(0, 300)}</p>
        <div className='mt-4'>
          <Image
            src={`${PUBLIC_STORAGE_URL}/uploads/discusses/${imageUrl}`}
            alt='Post Image'
            width={300}
            height={200}
            className='rounded-md'
          />
        </div>
      </Link>
    </li>
  );
};

export default PostProfile;
