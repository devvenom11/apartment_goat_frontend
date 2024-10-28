import dynamic from "next/dynamic";

const ResetPassword = dynamic(() => import("src/main-pages/password-reset"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <ResetPassword />;
}
