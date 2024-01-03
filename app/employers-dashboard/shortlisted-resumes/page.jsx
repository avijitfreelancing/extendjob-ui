import dynamic from "next/dynamic";
import ShortlistedResumes from "@/components/dashboard-pages/employers-dashboard/shortlisted-resumes";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Shortlisted Resumes || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <ShortlistedResumes />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
