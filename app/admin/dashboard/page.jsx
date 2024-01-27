import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/employers-dashboard/dashboard";
import AdminWrapper from "@/layout/AdminWrapper";

export const metadata = {
  title: "Employees Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <AdminWrapper>
        <DashboadHome />
      </AdminWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
