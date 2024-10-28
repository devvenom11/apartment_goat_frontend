import dynamic from "next/dynamic";

const ForgotPassword = dynamic(() => import("src/main-pages/password-forgot"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <ForgotPassword />;
}
