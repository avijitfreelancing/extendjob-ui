import dynamic from "next/dynamic";
import UserWrapper from "@/app/CandidateWrapper";
import EditJob from "@/components/jobs/EditJob";

export const metadata = {
  title: "Edit Job",
  description: "Edit Job",
};

const index = (props) => {
  return (
    <UserWrapper>
      <EditJob {...props} />
    </UserWrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
