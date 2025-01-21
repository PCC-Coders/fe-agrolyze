import {formattedDate} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";

const ArticleDetail = ({article}) => {
  return (
    <>
      <Link href='/artikel' className='flex items-center mb-12'>
        <MdKeyboardArrowLeft className='text-3xl' />
        Kembali
      </Link>
      <div className='grid gap-8'>
        <div className='grid gap-8'>
          <div>
            <h2 className='text-3xl font-bold'>{article.title}</h2>
            <p className='text-gray-400 font-semibold text-lg'>
              Ditulis oleh {article.user?.name}
            </p>
            <p className='text-gray-400 text-sm'>
              {formattedDate(article.updated_at)}
            </p>
          </div>
          <Image
            src={"/images/padi.png"}
            alt='Gambar'
            width={500}
            height={500}
            className='rounded-lg w-full h-[500px] object-cover'
          />
        </div>
        <div>{article.content}</div>
      </div>
    </>
  );
};

export default ArticleDetail;
