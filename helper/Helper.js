import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const getFileExtension = (file) => {
  let regex = new RegExp("[^.]+$");
  return file.name.match(regex)[0].toLowerCase();
};

export const BUCKET_DOMAIN =
  "https://equipment-rental-system.s3.amazonaws.com/";

export const DATE_TIME_HELPER = {
  DATE_FORMAT: "MM-DD-YYYY",
  DATE_TIME_FORMAT: "MM-DD-YYYY hh:mm a",
  JOB_DATE_FORMAT: "MMM D, YYYY",
};

export const userLogout = () => {
  const router = useRouter();
  const aa = toast.loading("Please Wait");
  setTimeout(() => {
    localStorage.clear();
    router.push("/login");
    toast.done(aa);
  }, 1500);
};

export const deleteObjectFields = (data, keys = []) => {
  return new Promise((resolve, reject) => {
    keys.push("_id", "createdAt", "updatedAt", "__v");

    let u = { ...data };
    keys.forEach((element) => {
      delete u[element];
    });
    resolve(u);
  });
};
