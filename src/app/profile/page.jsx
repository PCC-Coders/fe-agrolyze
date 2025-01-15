import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className='min-h-screen bg-green-900'>
      {/* Header */}
      <div className='bg-black text-white p-6 flex items-center'>
        <div className='w-24 h-24 bg-gray-400 rounded-full flex-shrink-0'></div>
        <div className='ml-6'>
          <h1 className='text-2xl font-bold'>Nama</h1>
          <p className='text-gray-400'>@username</p>
          <p className='text-gray-400'>Bergabung sejak Agustus 2024</p>
          <p className='mt-2'>bio/deskripsi</p>
        </div>
      </div>

      {/* Tabs */}
      <div className='bg-green-800 text-white px-6'>
        <div className='flex space-x-4 border-b border-blue-400'>
          <button className='py-3 px-4 border-b-4 border-yellow-400 font-semibold'>
            Postingan
          </button>
          <button className='py-3 px-4 hover:text-yellow-400'>Balasan</button>
          <button className='py-3 px-4 hover:text-yellow-400'>Suka</button>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <div className='bg-gray-200 rounded-lg p-4'>
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
                    <path d='M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a1 1 0 11-2 0 1 1 0 012 0zm5-1a1 1 0 100 2 1 1 0 000-2zm2-2a1 1 0 11-2 0 1 1 0 012 0z' />
                  </svg>
                  <span>112</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
