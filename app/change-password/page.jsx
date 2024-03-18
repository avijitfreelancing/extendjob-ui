import dynamic from "next/dynamic";
import CandidateWrapper from "@/app/CandidateWrapper";
import ChangePassword from "@/components/change-password/index";

export const metadata = {
    title: "Change Password",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <CandidateWrapper>
            <ChangePassword />
        </CandidateWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
