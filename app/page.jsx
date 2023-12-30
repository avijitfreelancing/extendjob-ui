import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home";

export const metadata = {
  title: "Home",
  description: "Extend Job Board",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
