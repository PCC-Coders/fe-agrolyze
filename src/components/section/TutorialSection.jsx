import TutorialList from "@/components/atoms/TutorialList";
import {tutorials} from "@/data";
import Image from "next/image";

const TutorialSection = () => {
  return (
    <section className='text-white bg-agro-dark-green relative'>
      <div className='p-8 lg:p-24 mx-auto container'>
        <h2 className='text-2xl lg:text-3xl font-bold text-center mb-20'>
          <span className='text-agro-yellow'>Cara Cek</span> Kesehatan Tanaman
        </h2>
        <div className='flex flex-col-reverse lg:flex-row gap-12 items-center'>
          <ul className='grid gap-8 items-center'>
            {tutorials.map((tutorial, index) => (
              <TutorialList {...tutorial} key={index} />
            ))}
          </ul>
          <div>
            <Image src='/images/apel.png' alt='' width={718} height={478} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0'>
        <Image src='/images/icon-rumput.png' alt='' width={1920} height={483} />
      </div>
    </section>
  );
};

export default TutorialSection;
