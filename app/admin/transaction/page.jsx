import dynamic from "next/dynamic";
import Transaction from "@/components/admin/transaction";
import AdminWrapper from "@/app/AdminWrapper"

export const metadata = {
  title: "Transaction",
  description: "Transaction",
};

const index = () => {
  return (
      <AdminWrapper>
        <Transaction />
      </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
