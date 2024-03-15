import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import ChangePassword from "@/components/change-password/index";

export const metadata = {
    title: "Change Password",
    description: "Extend Job Board",
};

const index = () => {
    return (
        <UserWrapper>
            <ChangePassword />
        </UserWrapper>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
