import dynamic from "next/dynamic";
import UserHome from "@/components/dashboard/index";
import UserWrapper from "@/layout/UserWrapper";

export const metadata = {
  title: "User Dashboard || Extend - Job Board",
  description: "User Dashboard || Extend - Job Board",
};

const index = () => {
  return (
    <>
      <UserWrapper>
        <UserHome />
      </UserWrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
