import dynamic from "next/dynamic";
import AdminHome from "@/components/admin/dashboard";
import AdminWrapper from "@/layout/AdminWrapper";

export const metadata = {
  title: "Admin Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <>
        <AdminHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
