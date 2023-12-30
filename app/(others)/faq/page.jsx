import dynamic from "next/dynamic";
import Faq from "@/components/pages-menu/faq";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: 'Faq',
  description:
    'Extend Job Board',
  
}



const index = () => {
  return (
    <>
      <Wrapper>
        <Faq />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
