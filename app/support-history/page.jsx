import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import SupportHistory from "@/components/support/SupportHistory";

export const metadata = {
    title: "Support History",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <SupportHistory />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
