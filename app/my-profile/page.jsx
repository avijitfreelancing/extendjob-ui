import dynamic from "next/dynamic";
import MyProfile from "@/components/my-profile/index";

export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

const index = () => {
  return (
    <>
        <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
