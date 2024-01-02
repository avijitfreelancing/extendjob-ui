import dynamic from "next/dynamic";
import ManageJobs from "@/components/dashboard-pages/employers-dashboard/manage-jobs";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Manage Jobs",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <ManageJobs />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
