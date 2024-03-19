import dynamic from "next/dynamic";
import ApplyJob from "@/components/applied-jobs/index";
import CandidateWrapper from "@/app/CandidateWrapper";

export const metadata = {
  title: "Apply Job",
  description: "Apply Job",
};

const index = () => {
  return (
      <CandidateWrapper>
          <ApplyJob />
      </CandidateWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
