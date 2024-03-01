import dynamic from "next/dynamic";
import DepositHistory from "@/components/deposit/DepositHistory";
import UserWrapper from "@/layout/UserWrapper";

export const metadata = {
    title: "Deposit History",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <DepositHistory />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
