import dynamic from "next/dynamic";
import { getMinimalProperties, getProperty } from "src/utils/helpers";
const ApartmentDetailPage = dynamic(
  () => import("src/main-pages/apartments-details"),
  {
    ssr: false,
  }
);
export default async function Page({ params: { slug } }) {
  const res = await getProperty({ slug: slug });
  const data = res?.data[0]?.attributes;

  return <ApartmentDetailPage data={data} />;
}
export async function generateStaticParams() {
  const res = await getMinimalProperties();
  
  const apartments = res.data.map(
    (apartment) =>
    apartment.attributes.slug && {
      slug: apartment.attributes.slug,
    }
    );

  return apartments.filter((s) => s);
}
