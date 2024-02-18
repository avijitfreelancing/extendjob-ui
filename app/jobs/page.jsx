import dynamic from "next/dynamic";
import Wrapper from "@/layout/Wrapper";
import JobListing from "@/components/jobs/JobListing";

export const metadata = {
  title: "Jobs",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <Wrapper>
      <JobListing />
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
