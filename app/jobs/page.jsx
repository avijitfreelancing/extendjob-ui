import dynamic from "next/dynamic";
import JobListing from "@/components/jobs/JobListing";
import Wrapper from "@/app/Wrapper"

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
