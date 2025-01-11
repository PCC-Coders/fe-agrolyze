import Image from "next/image";

const ArticleItem = ({imageUrl, date, author, title}) => {
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
          <h3 className='text-xl font-bold'>{title}</h3>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
