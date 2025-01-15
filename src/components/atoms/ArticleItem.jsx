import Image from "next/image";
import Link from "next/link";

const ArticleItem = ({imageUrl, date, author, title, slug}) => {
  return (
    <li>
      <div className='bg-agro-green rounded-lg'>
        <div className='relative'>
          <Image
            src={imageUrl}
            alt=''
            width={100}
            height={100}
            className='w-full h-[300px] rounded-t-lg object-cover'
          />
          <div className='bg-agro-light-yellow absolute bottom-0 right-0 p-2 rounded-tl-lg'>
            <p className='text-agro-green'>{date}</p>
          </div>
        </div>
        <div className='grid gap-8 items-center p-4'>
          <div className='flex gap-4 items-center'>
            <p>By {author}</p>
            <p>2 Comments</p>
          </div>
          <Link
            href={`/artikel/${slug}`}
            className='w-64 overflow-hidden text-ellipsis'
          >
            <h3 className='text-xl font-bold truncate'>{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
