import dynamic from "next/dynamic";
import JobHistory from "@/components/job-history/index";

export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

const index = () => {
  return (
    <>
        <JobHistory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
