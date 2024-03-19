import dynamic from "next/dynamic";
import AdminWrapper from "@/app/AdminWrapper";
import AllJobs from "@/components/admin/job/index";

export const metadata = {
  title: "Job Category",
  description: "Job Category",
};

const index = () => {
  return (
    <AdminWrapper>
      <AllJobs />
    </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
