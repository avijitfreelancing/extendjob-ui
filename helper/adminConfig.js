const adminConfig = () => {
  return {
    headers: {
      authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  };
};

export default adminConfig;
