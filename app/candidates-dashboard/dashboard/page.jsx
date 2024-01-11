import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "Candidates Dashboard || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <DashboadHome />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
