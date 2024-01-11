import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/candidates-dashboard/messages";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "Messages || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <Messages />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
