import dynamic from "next/dynamic";
import Contact from "@/components/contact";
import Wrapper from "@/app/Wrapper"
export const metadata = {
  title: 'Contact',
  description: 'extend-Job Board',
}
const index = () => {
  return (
      <Wrapper>
        <Contact />
      </Wrapper>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
