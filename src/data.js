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
    author: "Sucipto",
    date: "3 Sep, 2024",
    title: "Tanaman Pangan: Kunci Keberlanjutan Pangan Dunia",
    slug: "tanaman-pangan-kunci-keberlanjutan-pangan-dunia",
    content: `Tanaman pangan adalah salah satu komponen paling penting dalam sistem pertanian dunia. Mereka adalah sumber utama makanan bagi manusia dan hewan, serta mendukung ketahanan pangan global. Di antara tanaman pangan yang paling dikenal adalah padi, jagung, gandum, dan kentang, yang telah menjadi bagian tak terpisahkan dari pola makan banyak negara.
Seiring bertambahnya jumlah penduduk dunia, kebutuhan akan tanaman pangan yang dapat memenuhi permintaan makanan semakin meningkat. Oleh karena itu, inovasi dalam pertanian, seperti pemuliaan tanaman untuk menghasilkan varietas yang lebih tahan terhadap hama dan perubahan iklim, serta penggunaan teknik pertanian yang ramah lingkungan, menjadi semakin penting.
Tanaman pangan juga memiliki peran vital dalam mendukung ekonomi negara, menciptakan lapangan pekerjaan di sektor pertanian, dan mengurangi ketergantungan pada impor pangan. Namun, tantangan besar seperti perubahan iklim dan degradasi tanah mengharuskan kita untuk mencari solusi yang lebih berkelanjutan dalam mengelola sumber daya alam.`,
  },
  {
    imageUrl: "/images/apel.png",
    author: "Kevin Martin",
    date: "6 Sep, 2024",
    title:
      "Mengenal Tanaman Hortikultura: Keindahan dan Manfaatnya untuk Kehidupan Sehari-hari",
    slug: "mengenal-tanaman-hortikultura-keindahan-dan-manfaatnya-untuk-kehidupan-sehari-hari",
    content: `Tanaman hortikultura mencakup berbagai jenis tanaman yang ditanam untuk tujuan konsumsi manusia, keindahan, atau penggunaan lainnya. Kelompok tanaman ini terdiri dari buah-buahan, sayuran, bunga, tanaman obat, dan tanaman hias lainnya.
Hortikultura memiliki banyak manfaat untuk kehidupan sehari-hari. Dari sisi gizi, sayuran dan buah-buahan hortikultura menyediakan sumber vitamin, mineral, dan serat yang penting untuk kesehatan tubuh. Tanaman bunga dan tanaman hias, di sisi lain, berfungsi untuk mempercantik lingkungan, meningkatkan kualitas udara, dan memberikan ketenangan batin bagi orang-orang yang merawatnya.
Selain itu, sektor hortikultura juga memberikan kontribusi signifikan terhadap perekonomian dengan menciptakan peluang bisnis bagi petani, pengusaha, dan industri pengolahan makanan. Oleh karena itu, keberadaan hortikultura tidak hanya memberi manfaat estetika, tetapi juga berfungsi sebagai pendorong ekonomi yang penting.`,
  },
  {
    imageUrl: "/images/kopi.png",
    author: "Raihan",
    date: "7 Sep, 2024",
    title:
      "Perkebunan Berkelanjutan: Cara Mengelola Tanaman Perkebunan untuk Meningkatkan Produktivitas",
    slug: "perkebunan-berkelanjutan-cara-mengelola-tanaman-perkebunan-untuk-meningkatkan-produktivitas",
    content: `Perkebunan berkelanjutan adalah pendekatan dalam mengelola tanaman perkebunan yang tidak hanya berfokus pada peningkatan hasil produksi, tetapi juga memperhatikan keseimbangan ekologis, sosial, dan ekonomi. Tanaman perkebunan seperti kelapa sawit, kopi, teh, kakao, dan karet sering kali menjadi komoditas utama di banyak negara tropis, termasuk Indonesia.
Namun, pertumbuhan pesat sektor perkebunan seringkali menimbulkan dampak negatif terhadap lingkungan, seperti deforestasi dan polusi tanah dan air. Oleh karena itu, penting untuk menerapkan prinsip-prinsip pertanian berkelanjutan yang mengutamakan konservasi alam, penggunaan pestisida ramah lingkungan, serta pemberdayaan masyarakat lokal dalam pengelolaan perkebunan.
Dengan penerapan teknik-teknik seperti rotasi tanaman, agroforestry (pertanian berkelanjutan dengan pohon), dan manajemen sumber daya alam yang bijaksana, kita dapat memastikan keberlanjutan perkebunan sekaligus meningkatkan hasil produksi dalam jangka panjang.`,
  },
  {
    imageUrl: "/images/apel.png",
    author: "Keihin",
    date: "7 Sep, 2024",
    title:
      "Tanaman Hias: Menambah Keceriaan Rumah dengan Pilihan Tanaman yang Tepat",
    slug: "tanaman-hias-menambah-keceriaan-rumah-dengan-pilihan-tanaman-yang-tepat",
    content: `Tanaman hias tidak hanya memperindah ruangan, tetapi juga memberikan berbagai manfaat bagi kesehatan dan kualitas udara di dalam rumah. Tanaman seperti monstera, aloe vera, spider plant, dan peace lily populer di kalangan penggemar tanaman hias karena keindahannya dan kemudahan dalam perawatannya.
Selain fungsi estetika, tanaman hias juga dikenal memiliki kemampuan untuk menyaring polutan udara dan meningkatkan kelembaban ruangan. Beberapa tanaman bahkan dipercaya dapat mengurangi stres dan meningkatkan mood. Misalnya, tanaman lavender dikenal memiliki aroma yang menenangkan, sedangkan tanaman sukulen dapat memberikan kesan alami dan menenangkan di ruang tamu atau meja kerja.
Memilih tanaman hias yang tepat untuk rumah Anda tidak hanya tergantung pada preferensi visual, tetapi juga pada faktor lingkungan, seperti pencahayaan dan kelembaban ruangan. Dengan merawat tanaman hias dengan baik, Anda dapat menikmati manfaat jangka panjang dari kehadirannya.`,
  },
  {
    imageUrl: "/images/padi.png",
    author: "Kuncoro",
    date: "28 Sep, 2024",
    title: "Manfaat Tanaman Obat: Rahasia Alam untuk Kesehatan yang Lebih Baik",
    slug: "manfaat-tanaman-obat-rahasia-alam-untuk-kesehatan-yang-lebih-baik",
    content: `Tanaman obat telah digunakan sejak zaman dahulu sebagai pengobatan alami untuk berbagai penyakit dan keluhan kesehatan. Berbagai tanaman obat, seperti jahe, kunyit, temulawak, dan daun sirsak, diketahui memiliki kandungan senyawa aktif yang dapat meningkatkan daya tahan tubuh, mengurangi peradangan, dan membantu proses penyembuhan.
Jahe, misalnya, telah lama dikenal untuk mengatasi gangguan pencernaan, mual, dan masalah pernapasan. Kunyit, yang mengandung kurkumin, memiliki efek antiinflamasi yang sangat kuat, menjadikannya pilihan populer dalam pengobatan tradisional. Begitu pula dengan temulawak yang digunakan untuk menjaga kesehatan hati dan memperlancar pencernaan.
Keberadaan tanaman obat tidak hanya bermanfaat dalam pengobatan herbal, tetapi juga dapat meningkatkan kesadaran akan pentingnya pengobatan alami yang lebih terjangkau dan minim efek samping. Oleh karena itu, menanam tanaman obat di rumah bisa menjadi langkah yang baik untuk menjaga kesehatan secara alami dan mandiri.
`,
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
