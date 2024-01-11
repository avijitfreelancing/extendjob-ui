import dynamic from "next/dynamic";
import ShortListedJobs from "@/components/dashboard-pages/candidates-dashboard/short-listed-jobs";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "Short ListedJobs || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <ShortListedJobs />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
