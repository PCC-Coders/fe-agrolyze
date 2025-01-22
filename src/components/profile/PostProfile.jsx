import Image from "next/image";

const PostProfile = ({imageUrl, user, title, content}) => {
  return (
    <li className='flex items-start bg-gray-200 rounded-lg p-4'>
      <div className='w-12 h-12 rounded-full overflow-hidden'>
        <Image
          src='/images/icon_profil.svg'
          alt='Profile Picture'
          width={48}
          height={48}
        />
      </div>
      <div className='ml-4 flex-1'>
        <p className='font-semibold'>@{user?.name}</p>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-base mt-1'>{content.substring(0, 300)}</p>
        <div className='mt-4'>
          <Image
            src='/images/apel.png'
            alt='Post Image'
            width={300}
            height={200}
            className='rounded-md'
          />
        </div>
      </div>
    </li>
  );
};

export default PostProfile;
