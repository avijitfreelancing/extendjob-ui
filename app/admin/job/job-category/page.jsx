import dynamic from "next/dynamic";
import JobCategory from "@/components/admin/job/job-category"
import AdminWrapper from "@/layout/AdminWrapper";

export const metadata = {
  title: "Employees Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <AdminWrapper>
        <JobCategory />
      </AdminWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
