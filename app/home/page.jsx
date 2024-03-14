import React from "react";

import Home from "@/components/home";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Home",
  description: "Extend-job-home",
};

const index = () => {
  return (
      <Wrapper>
        <Home />
      </Wrapper>
  );
};

export default index;
