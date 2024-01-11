import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/candidates-dashboard/packages";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "Packages || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <Packages />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
