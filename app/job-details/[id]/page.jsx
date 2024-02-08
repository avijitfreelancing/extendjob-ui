import dynamic from "next/dynamic";
import JobDetails from "@/components/job-details/JobDetails";

export const metadata = {
  title: "Job Dtails",
  description: "Job Dtails",
};

const index = (props) => {
  return (
    <>
      <JobDetails {...props} />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
