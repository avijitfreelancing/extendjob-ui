import Axios from "axios";

const axios = Axios.create({
  // baseURL: "http://localhost:3005/api", //local
  baseURL: "https://extendjob-api.vercel.app/api", //PROD
});

export default axios;
