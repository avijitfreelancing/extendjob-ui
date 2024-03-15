import dynamic from "next/dynamic";
import FinishJob from "@/components/finish-job/index";

export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

const index = () => {
  return (
    <>
        <FinishJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
