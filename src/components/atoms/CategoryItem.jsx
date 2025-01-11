import Image from "next/image";

const CategoryItem = ({imageUrl, title, item}) => {
  return (
    <li className='flex gap-4 items-center'>
      <Image src={imageUrl} alt='Icon' width={50} height={50} />
      <div>
        <h3 className='font-semibold'>{title}</h3>
        <p>{item}</p>
      </div>
    </li>
  );
};

export default CategoryItem;
