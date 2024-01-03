import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/employers-dashboard/messages";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Messages",
  description: "Job Borad"
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <Messages />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
