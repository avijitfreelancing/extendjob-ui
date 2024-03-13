import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import Deposit from "@/components/wallet/Deposit";

export const metadata = {
  title: "Deposit Method",
  description: "Extend Job Board",
};

const index = () => {
  return (
    <UserWrapper>
      <Deposit />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
