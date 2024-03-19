import dynamic from "next/dynamic";
import AdminWrapper from "@/app/AdminWrapper";
import AllJobsForAdmin from "@/components/admin/jobs/AllJobsForAdmin";

export const metadata = {
  title: "Jobs",
  description: "Jobs",
};

const index = () => {
  return (
    <AdminWrapper>
      <AllJobsForAdmin />
    </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
