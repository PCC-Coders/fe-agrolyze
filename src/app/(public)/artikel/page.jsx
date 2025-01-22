import Articles from "@/components/articles/Articles";
import {API_BASE_URL, API_DEV_URL} from "@/lib/config";

async function fetchArticles() {
  try {
    const response = await fetch(`${API_DEV_URL}/post`);
    const {data} = await response.json();
    return data || [];
  } catch (error) {
    console.error("Gagal mengambil data artikel:", error);
    return [];
  }
}

export default async function ArtikelPage() {
  const articles = await fetchArticles();

  return <Articles articles={articles} />;
}
