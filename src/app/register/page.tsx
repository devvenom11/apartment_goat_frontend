import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("src/main-pages/sign-up"), {
  ssr: false,
});
export function generateStaticParams() {
  return [{ slug: [""] }];
}
export default function Page() {
  return <SignUp />;
}
