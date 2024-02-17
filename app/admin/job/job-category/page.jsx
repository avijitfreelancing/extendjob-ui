import dynamic from "next/dynamic";
// import JobCategory from "@/components/admin/job/job-category";
import AdminWrapper from "@/layout/AdminWrapper";
import JobCategory from "@/components/admin/jobs/JobCategory";

export const metadata = {
  title: "Job Category",
  description: "Job Category",
};

const index = () => {
  return (
    <AdminWrapper>
      <JobCategory />
    </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
