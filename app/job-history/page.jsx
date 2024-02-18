import JobHistory from "@/components/jobs/JobHistory";
import UserWrapper from "@/layout/UserWrapper";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Job History",
  description: "Job History",
};

const index = () => {
  return (
    <UserWrapper>
      <JobHistory />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
