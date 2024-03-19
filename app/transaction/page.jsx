import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import Transaction from "@/components/wallet/Transaction";

export const metadata = {
  title: "Transaction",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <UserWrapper>
      <Transaction />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
