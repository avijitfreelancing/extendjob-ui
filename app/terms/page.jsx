import dynamic from "next/dynamic";
import Terms from "@/components/terms";
import Wrapper from "@/app/Wrapper";
export const metadata = {
  title: "Terms",
  description: "Extend-Job Board",
};
const index = () => {
  return (
    <Wrapper>
      <Terms />
    </Wrapper>
  );
};
export default dynamic(() => Promise.resolve(index), { ssr: false });
