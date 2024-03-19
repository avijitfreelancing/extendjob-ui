import dynamic from "next/dynamic";
import About from "@/components/about";
import Wrapper from "@/app/Wrapper";

export const metadata = {
  title: 'About',
  description:
    'Extend-Job Board',
  
}

const index = () => {
  return (
      <Wrapper>
        <About />
      </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
