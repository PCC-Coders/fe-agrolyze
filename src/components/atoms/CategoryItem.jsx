import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({name, slug}) => {
  return (
    <li>
      <Link href={`kategori/${slug}`} className='flex gap-4 items-center'>
        <Image
          src='/images/icon-tanaman.png'
          alt='Icon'
          width={50}
          height={50}
        />
        <div>
          <h3 className='font-semibold'>{name}</h3>
          <p className='text-sm'>{slug}</p>
        </div>
      </Link>
    </li>
  );
};

export default CategoryItem;
