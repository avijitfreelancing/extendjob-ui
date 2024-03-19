import dynamic from "next/dynamic";
import Faq from "@/components/faq";
import Wrapper from "@/app/Wrapper";

export const metadata = {
  title: 'Faq',
  description: 'Job Board',
}
const index = () => {
  return (
      <Wrapper>
        <Faq />
      </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
