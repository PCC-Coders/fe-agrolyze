import {PUBLIC_STORAGE_URL} from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

const ArticleItem = ({imageUrl, update_at, count, user, title, slug}) => {
  return (
    <li>
      <div className='bg-agro-green rounded-lg'>
        <div className='relative'>
          <Image
            // src={`${PUBLIC_STORAGE_URL}/posts/${imageUrl}`}
            src={"/images/padi.png"}
            alt={title}
            width={100}
            height={100}
            className='w-full h-[300px] rounded-t-lg object-cover'
          />
          <div className='bg-agro-light-yellow absolute bottom-0 right-0 p-2 rounded-tl-lg'>
            <p className='text-agro-green'>{update_at}</p>
          </div>
        </div>
        <div className='grid gap-8 items-center p-4'>
          <div className='grid items-center'>
            <p>By {user.name}</p>
            <div className='flex items-center gap-2'>
              <p>{count} view</p>
            </div>
          </div>
          <Link
            href={`/artikel/${slug}`}
            className='w-full overflow-hidden text-ellipsis'
          >
            <h3 className='text-lg md:text-xl font-bold truncate'>{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
