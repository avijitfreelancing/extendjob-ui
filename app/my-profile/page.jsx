import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import MyProfile from "@/components/my-profile/MyProfile";

export const metadata = {
  title: "User Profile",
  description: "User Profile",
};

const index = () => {
  return (
    <UserWrapper>
      <MyProfile />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
