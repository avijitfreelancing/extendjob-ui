import dynamic from "next/dynamic";
import Terms from "@/components/pages-menu/terms";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: 'Terms',
  description:
    'Extend Job Board',
  
}



const index = () => {
  return (
    <>
      <Wrapper>
        <Terms />
      </Wrapper>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
