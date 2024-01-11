import dynamic from "next/dynamic";
import CvManager from "@/components/dashboard-pages/candidates-dashboard/cv-manager";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "CV Manager || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <CvManager />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
