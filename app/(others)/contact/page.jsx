import dynamic from "next/dynamic";
import Contact from "@/components/pages-menu/contact";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: 'Contact',
  description:
    'Extend Job Board',
  
}



const index = () => {
  return (
    <>
      <Wrapper>
        <Contact />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
