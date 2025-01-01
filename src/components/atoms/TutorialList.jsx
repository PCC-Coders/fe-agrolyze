const TutorialList = ({title, description, svg}) => {
  return (
    <li className='flex gap-4 items-center'>
      <div className='bg-agro-light-green p-3 rounded-full'>{svg}</div>
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TutorialList;
