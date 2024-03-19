import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import Withdraw from "@/components/withdraw/Withdraw";

export const metadata = {
    title: "Deposit Method",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <Withdraw />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
