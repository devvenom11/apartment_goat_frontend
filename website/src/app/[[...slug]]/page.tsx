import dynamic from "next/dynamic";

const Home = dynamic(() => import("src/main-pages/home"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: ["article"] },{ slug: ["apartment-details"] }];
}
export default function Page() {
  return <Home />;
}
