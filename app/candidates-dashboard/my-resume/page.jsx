import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "My Resume || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <MyResume />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
