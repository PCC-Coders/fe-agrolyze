import ArticleSection from "@/components/section/ArticleSection";
import FeatureSection from "@/components/section/FeatureSection";
import HeroSection from "@/components/section/HeroSection";
import TutorialSection from "@/components/section/TutorialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <TutorialSection />
      <ArticleSection />
    </main>
  );
}