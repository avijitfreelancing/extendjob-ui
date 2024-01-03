import dynamic from "next/dynamic";
import PostJob from "@/components/dashboard-pages/employers-dashboard/post-jobs";
import EmployerWrapper from "@/layout/EmployerWrapper";

export const metadata = {
  title: "Post Jobs",
  description: "Job Board",
};

const index = () => {
  return (
    <>
      <EmployerWrapper>
        <PostJob />
      </EmployerWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
