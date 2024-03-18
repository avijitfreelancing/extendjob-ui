import dynamic from "next/dynamic";
import CandidateWrapper from "@/app/CandidateWrapper"
import UserDashboard from "@/components/dashboard/UserDashboard";

export const metadata = {
  title: "Candidate Dashboard || Extend - Job Board",
  description: "Candidate Dashboard || Extend - Job Board",
};

const index = () => {
  return (
    <CandidateWrapper>
      <UserDashboard />
    </CandidateWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
