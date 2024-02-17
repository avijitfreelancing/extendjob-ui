import dynamic from "next/dynamic";
import UserWrapper from "@/layout/UserWrapper";
import UserDashboard from "@/components/dashboard/UserDashboard";

export const metadata = {
  title: "User Dashboard || Extend - Job Board",
  description: "User Dashboard || Extend - Job Board",
};

const index = () => {
  return (
    <UserWrapper>
      <UserDashboard />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
