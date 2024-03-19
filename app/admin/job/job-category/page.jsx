import dynamic from "next/dynamic";
import AdminWrapper from "@/app/AdminWrapper";
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
