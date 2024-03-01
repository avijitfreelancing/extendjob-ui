import dynamic from "next/dynamic";
import JobDetails from "@/components/jobs/JobDetails";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Job Details",
  description: "Job Details",
};

const index = (props) => {
  return (
    <Wrapper>
      <JobDetails {...props} />
    </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
