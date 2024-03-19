import dynamic from "next/dynamic";
import AdminWrapper from "@/app/AdminWrapper";
import Candidate from "@/components/admin/candidate/Candidate";

export const metadata = {
  title: "candidate",
  description: "candidate",
};

const index = () => {
  return (
    <AdminWrapper>
      <Candidate />
    </AdminWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
