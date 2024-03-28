import dynamic from "next/dynamic";
import RefundPolicy from "@/components/refund-policy";
import Wrapper from "@/app/Wrapper"
export const metadata = {
  title: 'Refund-Policy',
  description: 'Extend-Job Board',
}
const index = () => {
  return (
      <Wrapper>
        <RefundPolicy />
      </Wrapper>
  );
};
export default dynamic(() => Promise.resolve(index), { ssr: false });
