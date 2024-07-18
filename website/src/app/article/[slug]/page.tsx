import dynamic from "next/dynamic";

const ArticlePage = dynamic(() => import("src/main-pages/article-page"), {
  ssr: false,
});
 
export default function Page({ params: { slug } }) {
  
  return <ArticlePage slug={slug} />;
}
