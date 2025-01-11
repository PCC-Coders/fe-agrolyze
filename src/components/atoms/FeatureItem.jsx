import Image from "next/image";

const FeatureItem = ({imageUrl, description}) => {
  return (
    <li>
      <Image
        src={imageUrl}
        alt='Tanaman'
        width={1000}
        height={1000}
        quality={100}
        className='w-full object-cover'
      />
      <p className='my-4 text-center'>{description}</p>
    </li>
  );
};

export default FeatureItem;
