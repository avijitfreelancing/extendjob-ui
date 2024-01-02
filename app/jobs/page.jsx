import dynamic from "next/dynamic";
import JobList from "@/components/jobs/job-list";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Jobs",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <>
      <Wrapper>
        <JobList />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
