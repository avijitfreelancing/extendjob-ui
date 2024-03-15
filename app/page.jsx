import React from "react";

import Home from "@/components/home";
import Layout from "@/app/layout"

export const metadata = {
  title: "Home",
  description: "Extend-job-home",
};

const index = () => {
  return (
      <Layout>
        <Home />
      </Layout>
  );
};

export default index;
