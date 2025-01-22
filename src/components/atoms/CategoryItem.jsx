import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({name}) => {
  return (
    <li>
      <Link href='#' className='flex gap-4 items-center'>
        <Image
          src='/images/icon-tanaman.png'
          alt='Icon'
          width={50}
          height={50}
        />
        <div>
          <h3 className='font-semibold'>{name}</h3>
        </div>
      </Link>
    </li>
  );
};

export default CategoryItem;
