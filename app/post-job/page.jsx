import dynamic from "next/dynamic";
import PostJob from "@/components/post-job/index";

export const metadata = {
  title: "User Job Post",
  description: "User Job Post",
};

const index = () => {
  return (
    <>
        <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
