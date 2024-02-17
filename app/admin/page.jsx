import dynamic from "next/dynamic";
import AdminLogin from "@/components/admin/AdminLogin";
export const metadata = {
  title: "Login || Extend-job - Job Board",
  description: "Extend-job - Job Board",
};

const index = () => {
  return (
    <>
      <AdminLogin />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
