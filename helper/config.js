const config = () => {
  return {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

export default config;
