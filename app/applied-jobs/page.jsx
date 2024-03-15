import dynamic from "next/dynamic";
import ApplyJob from "@/components/applied-jobs/index";

export const metadata = {
  title: "Apply Job",
  description: "Apply Job",
};

const index = () => {
  return (
    <>
        <ApplyJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
