import dynamic from "next/dynamic";

const LogIn = dynamic(() => import("src/main-pages/log-in"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <LogIn />;
}
