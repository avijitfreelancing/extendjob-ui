import dynamic from "next/dynamic"
import AdminLogIn from "@/components/admin/Login";
export const metadata = {
  title: "Login || Extend-job - Job Board",
  description: "Extend-job - Job Board",
};

const index = () => {
  return (
    <>
      <AdminLogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
