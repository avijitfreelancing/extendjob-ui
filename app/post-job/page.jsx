import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import JobPost from "@/components/jobs/JobPost";

export const metadata = {
  title: "Job Post",
  description: "Job Post",
};

const index = () => {
  return (
    <UserWrapper>
      <JobPost />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
