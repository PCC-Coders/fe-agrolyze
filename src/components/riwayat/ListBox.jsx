import React from "react";
import ListBoxItem from "./ListBoxItem";

export default function ListBox({data}) {
  return (
    <div className='bg-agro-dark-green p-6 rounded-lg'>
      {data.map((item, index) => (
        <ListBoxItem
          key={index}
          image={item.image}
          name={item.name}
          date={item.date}
          result={item.result}
        />
      ))}
    </div>
  );
}
