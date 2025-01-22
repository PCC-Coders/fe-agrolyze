import Link from "next/link";
import {FiMessageCircle} from "react-icons/fi";

const CommentProfile = ({comment, discuss}) => {
  return (
    <Link
      href={`/diskusi/${discuss?.slug}`}
      className='block bg-agro-light-gray p-2 rounded-lg'
    >
      <h3 className='text-lg font-semibold'>{discuss?.title}</h3>
      <div className='flex gap-1 items-center'>
        <FiMessageCircle />
        <p>{comment}</p>
      </div>
    </Link>
  );
};

export default CommentProfile;
