import FeatureList from "@/components/atoms/FeatureList";
import {features} from "@/data";

const FeatureSection = () => {
  return (
    <section className='text-white bg-agro-green'>
      <div className='p-8 lg:p-24 container mx-auto'>
        <h2 className='text-2xl lg:text-3xl text-center mb-20 font-bold'>
          <span className='text-agro-yellow'>Kenapa</span> Pilih Kita?
        </h2>
        <ul className='grid lg:grid-cols-3 gap-4 lg:gap-12 items-center'>
          {features.map((feature, index) => (
            <FeatureList key={index} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
