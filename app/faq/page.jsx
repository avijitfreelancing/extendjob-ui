import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Layout from "@/app/layout";

export const metadata = {
  title: 'Faq',
  description: 'Job Board',
}
const index = () => {
  return (
      <Layout>
        <Faq />
      </Layout>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
