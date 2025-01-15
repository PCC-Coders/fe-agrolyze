import Image from "next/image";

export default function BookmarkPage() {
  return (
    <div className='min-h-screen bg-green-900 p-6'>
      {/* Header */}
      <div className='flex items-center space-x-2 text-white mb-6'>
        <button className='text-lg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <h1 className='text-xl font-bold'>Bookmark Saya</h1>
      </div>

      {/* Content */}
      <div className='bg-gray-200 rounded-lg p-4 border-2 border-blue-400'>
        <div className='flex items-start'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <Image
              src='/profile-picture.jpg'
              alt='Profile Picture'
              width={48}
              height={48}
            />
          </div>
          <div className='ml-4 flex-1'>
            <p className='font-semibold'>@rudisetia</p>
            <p className='text-sm mt-1'>
              Mohon sarannya bapak ibu sekalian gimana ya supaya tanaman cabai
              tidak kena hama
            </p>
            <div className='mt-4'>
              <Image
                src='/plant-example.jpg'
                alt='Post Image'
                width={300}
                height={200}
                className='rounded-md'
              />
            </div>
            <div className='flex items-center mt-4 space-x-4 text-gray-600'>
              <div className='flex items-center space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656L10 18l-6.828-6.828a4 4 0 010-5.656z' />
                </svg>
                <span>112</span>
              </div>
              <div className='flex items-center space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M7 10h6a1 1 0 010 2H7a1 1 0 010-2z' />
                </svg>
                <span>12</span>
              </div>
              <div className='flex items-center space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M5 3v18l7-7 7 7V3z' />
                </svg>
                <span>112</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
