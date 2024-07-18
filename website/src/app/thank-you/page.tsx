import dynamic from "next/dynamic";

const ThanksMessage = dynamic(() => import("src/main-pages/thanks-message"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <ThanksMessage />;
}
