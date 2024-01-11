import dynamic from "next/dynamic";
import AppliedJobs from "@/components/dashboard-pages/candidates-dashboard/applied-jobs";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "Applied Jobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <AppliedJobs />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
