import {cookies} from "next/headers";
import {API_DEV_URL} from "@/lib/config";
import CardDetail from "@/components/discussion/card/CardDetail";

const fetchDetailDiscusses = async (slug) => {
  const token = cookies().get("token")?.value; // Ambil token dari cookie

  if (!token) {
    throw new Error("Token not found!");
  }

  const res = await fetch(`${API_DEV_URL}/discusses/${slug}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

const DiscussesDetail = async ({params}) => {
  const {slug} = params;

  try {
    const {data: discusses} = await fetchDetailDiscusses(slug);

    return (
      <div className='container mx-auto p-4'>
        <CardDetail {...discusses} />
      </div>
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <div className='p-4 bg-red-100 text-red-600 rounded-lg'>
        <p>Data diskusi tidak ditemukan atau gagal diambil.</p>
      </div>
    );
  }
};

export default DiscussesDetail;
