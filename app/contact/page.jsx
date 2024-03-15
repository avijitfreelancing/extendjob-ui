import dynamic from "next/dynamic";
import Contact from "@/components/contact";
import Layout from "@/app/layout"
export const metadata = {
  title: 'Contact',
  description: 'extend-Job Board',
}
const index = () => {
  return (
      <Layout>
        <Contact />
      </Layout>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
