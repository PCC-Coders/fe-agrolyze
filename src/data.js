import {FiCamera} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {LuCloudUpload} from "react-icons/lu";
import {MdOutlineTimer} from "react-icons/md";

export const features = [
  {
    imageUrl: "/images/kopi.png",
    alt: "Tanaman",
    description: "Belajar dengan deteksi tanaman",
  },
  {
    imageUrl: "/images/padi.png",
    alt: "Padi",
    description: "Cek kesehatan tanaman secara akurat",
  },
  {
    imageUrl: "/images/menanam-padi.png",
    alt: "Menanam Padi",
    description: "Diskusi komunitas",
  },
];

export const tutorials = [
  {
    title: "Ambil Foto",
    description:
      "Foto bagian tanaman anda yang terkena penyakit dan pastikan foto tampak jelas.",
    svg: <FiCamera color='#263C28' className='w-[30px] h-[30px]' />,
  },
  {
    title: "Upload Foto",
    description: "Unggah foto yang telah diambil tadi ke website Agrolyze.",
    svg: <LuCloudUpload color='#263C28' className='w-[30px] h-[30px]' />,
  },
  {
    title: "Tambahkan Lokasi",
    description:
      "Tambahkan lokasi tanaman anda agar kami dapat memberikan informasi yang lebih akurat.",
    svg: <IoLocationOutline color='#263C28' className='w-[30px] h-[30px]' />,
  },
  {
    title: "Tunggu Hasil",
    description:
      "Tunggu beberapa saat hingga sistem kami memberikan hasil deteksi penyakit tanaman anda.",
    svg: <MdOutlineTimer color='#263C28' className='w-[30px] h-[30px]' />,
  },
];

export const articles = [
  {
    imageUrl: "/images/padi.png",
    author: "Kevin Martin",
    date: "3 Sep, 2024",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos voluptatum facilis nihil, consequatur alias provident blanditiis voluptates nisi quis?",
  },
  {
    imageUrl: "/images/padi.png",
    author: "Kevin Martin",
    date: "3 Sep, 2024",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos voluptatum facilis nihil, consequatur alias provident blanditiis voluptates nisi quis?",
  },
  {
    imageUrl: "/images/padi.png",
    author: "Kevin Martin",
    date: "3 Sep, 2024",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos voluptatum facilis nihil, consequatur alias provident blanditiis voluptates nisi quis?",
  },
];

export const categories = [
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Pangan",
    item: "Padi, Jagung, Kedelai, dll",
  },
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Hortikultural",
    item: "Buah-buahan, Sayuran, Bunga, dll",
  },
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Perkebunan",
    item: "Kelapa Sawit, Kopi, Teh, Karet, dll",
  },
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Hias",
    item: "Anggrek, Monstera, Kaktus, dll",
  },
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Obat",
    item: "Jahe, Kunyit, Temulawak, dll",
  },
  {
    imageUrl: "/images/icon-tanaman.png",
    title: "Tanaman Kehutanan",
    item: "Jati, Mahoni, Meranti, dll",
  },
];
