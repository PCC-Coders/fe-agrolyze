import {FileInputFlowbite} from "@/components/atoms/flowbite/FileInput";

const JenisTanaman = () => {
  return (
    <section className='bg-agro-dark-green text-white'>
      <div className='p-20'>
        <div className='grid md:grid-cols-2 gap-2 md:gap-8 items-center'>
          <FileInputFlowbite />
          <div>
            <h2 className='text-2xl lg:text-3xl text-center font-bold my-6 md:my-16'>
              Cek <span className='text-agro-yellow'>Informasi</span> Tanaman
            </h2>
            <div className='grid gap-2'>
              <input
                type='text'
                name=''
                id=''
                className='rounded-lg bg-agro-green'
                placeholder='Your location'
              />
              <button className='bg-agro-light-yellow text-agro-green rounded-lg px-4 py-2 mt-4'>
                Cek Tanaman
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JenisTanaman;
