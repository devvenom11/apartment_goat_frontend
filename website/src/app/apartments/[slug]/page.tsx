import dynamic from "next/dynamic";
import { locations } from "src/utils/data";
const FindApartmentPage = dynamic(
  () => import("src/main-pages/find-apartment-page"),
  {
    ssr: false,
  }
);
export default async function Page({ params: { slug } }) {
  return <FindApartmentPage slug={slug} />;
}
export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}
