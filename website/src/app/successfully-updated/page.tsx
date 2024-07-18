import dynamic from "next/dynamic";

const SuccessfullyUpdadet = dynamic(() => import("src/main-pages/updated-successfully"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <SuccessfullyUpdadet />;
}
