import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import WithdrawHistory from "@/components/withdraw/WithdrawHistory";

export const metadata = {
    title: "Deposit History",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <WithdrawHistory />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
