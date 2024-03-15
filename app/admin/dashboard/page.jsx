import dynamic from "next/dynamic";
import AdminWrapper from "@/layout/AdminWrapper";
import AdminDashboard from "@/components/admin/dashboard/AdminDashboard";

export const metadata = {
  title: "Admin Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <AdminWrapper>
      <AdminDashboard />
    </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
