import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/employers-dashboard/dashboard";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Employees Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <DashboadHome />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
