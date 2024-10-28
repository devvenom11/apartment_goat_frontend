import dynamic from "next/dynamic";

const PropertiesPage = dynamic(() => import("src/main-pages/properties-page"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <PropertiesPage />;
}
