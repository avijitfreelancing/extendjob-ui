import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard-pages/candidates-dashboard/my-profile";
import CandidateWrapper from "@/layout/CandidateWrapper";

export const metadata = {
  title: "My Profile || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template"
};

const index = () => {
  return (
    <>
      <CandidateWrapper>
        <MyProfile />
      </CandidateWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
