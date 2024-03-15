import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import SupportCreate from "@/components/support/SupportCreate";

export const metadata = {
    title: "Support History",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <SupportCreate />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
