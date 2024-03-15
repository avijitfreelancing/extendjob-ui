import dynamic from "next/dynamic";
import Terms from "@/components/terms";
import Layout from "@/app/layout"
export const metadata = {
  title: 'Terms',
  description: 'Extend-Job Board',
}
const index = () => {
  return (
      <Layout>
        <Terms />
      </Layout>
  );
};
export default dynamic(() => Promise.resolve(index), { ssr: false });
