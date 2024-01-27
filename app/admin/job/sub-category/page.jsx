import dynamic from "next/dynamic";
import SubCategory from "@/components/admin/job/sub-category";
import AdminWrapper from "@/layout/AdminWrapper";

export const metadata = {
  title: "Employees Dashboard",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <AdminWrapper>
        <SubCategory />
      </AdminWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
