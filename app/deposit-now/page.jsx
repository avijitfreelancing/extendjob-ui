import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import DepositNow from "@/components/deposit/DepositNow";

export const metadata = {
    title: "Deposit Method",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <DepositNow />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
