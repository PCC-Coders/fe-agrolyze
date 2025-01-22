import React from "react";
import ListBoxItem from "./ListBoxItem";

export default function ListBox({data}) {
  return (
    <div className='bg-agro-dark-green p-6 rounded-lg'>
      {data.map((item, index) => (
        <ListBoxItem
          key={index}
          image={item.image}
          similar_image={item.similar_images}
          name={item.plant_name || item.disease}
          date={item.updated_at}
          result={item.probability}
          explaination={item.explaination}
          treatment={item.treatment}
        />
      ))}
    </div>
  );
}
