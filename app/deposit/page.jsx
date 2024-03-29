import dynamic from "next/dynamic";
import CandidateWrapper from "@/app/CandidateWrapper";
import Deposit from "@/components/wallet/Deposit";

export const metadata = {
  title: "Deposit Method",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <CandidateWrapper>
      <Deposit />
    </CandidateWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
