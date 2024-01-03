import dynamic from "next/dynamic";
import ChangePassword from "@/components/dashboard-pages/employers-dashboard/change-password";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Change Password || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <ChangePassword />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
