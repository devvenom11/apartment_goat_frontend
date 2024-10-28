import dynamic from "next/dynamic";

const BlogPage = dynamic(() => import("src/main-pages/blog-page"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <BlogPage />;
}
