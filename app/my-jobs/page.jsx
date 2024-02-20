import MyJobs from "@/components/jobs/MyJobs";
import UserWrapper from "@/layout/UserWrapper";
import dynamic from "next/dynamic";

export const metadata = {
  title: "My Jobs",
  description: "My Jobs",
};

const index = () => {
  return (
    <UserWrapper>
      <MyJobs />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
