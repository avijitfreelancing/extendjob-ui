import dynamic from "next/dynamic";
import About from "@/components/about";
import Layout from "@/app/layout";

export const metadata = {
  title: 'About',
  description:
    'Extend-Job Board',
  
}



const index = () => {
  return (
      <Layout>
        <About />
      </Layout>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
