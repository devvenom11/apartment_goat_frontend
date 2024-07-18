import dynamic from "next/dynamic";

const ApartmentAccount = dynamic(() => import("src/main-pages/apartment-accounts"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <ApartmentAccount />;
}
