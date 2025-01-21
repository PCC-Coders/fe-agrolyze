import {API_BASE_URL, API_DEV_URL} from "@/lib/config";
import ArticleDetail from "@/components/articles/ArticleDetail";

const fetchDetailArticle = async (slug) => {
  const res = await fetch(`${API_DEV_URL}/post/${slug}`, {cache: "no-store"});
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

const DetailArtikel = async ({params}) => {
  const {slug} = await params;
  const {data: article} = await fetchDetailArticle(slug);

  if (!article) {
    return (
      <div className='bg-agro-dark-green text-white text-center font-semibold p-20'>
        Artikel tidak ditemukan.
      </div>
    );
  }

  return (
    <section className='bg-agro-dark-green text-white p-3 lg:p-16'>
      <ArticleDetail article={article} />
    </section>
  );
};

export default DetailArtikel;
