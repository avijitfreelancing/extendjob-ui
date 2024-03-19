import React from "react";
import Wrapper from "@/app/Wrapper";
import HomePage from "@/components/home/HomePage";

export const metadata = {
  title: "Home",
  description: "Extend-job-home",
};

const index = () => {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
};

export default index;
