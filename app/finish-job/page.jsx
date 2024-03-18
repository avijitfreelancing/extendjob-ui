import dynamic from "next/dynamic";
import FinishJob from "@/components/finish-job/index";
import CandidateWrapper from "@/app/CandidateWrapper"

export const metadata = {
  title: "Finish Jobs",
  description: "Finish Jobs",
};

const index = () => {
  return (
      <CandidateWrapper>
        <FinishJob />
      </CandidateWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
