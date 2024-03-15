import dynamic from "next/dynamic";
import JobListing from "@/components/jobs/JobListing";
import Layout from "@/app/layout"

export const metadata = {
  title: "Jobs",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <Layout>
      <JobListing />
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
