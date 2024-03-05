import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import Transaction from "@/components/transaction";

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
