export const getFileExtension = (file) => {
  let regex = new RegExp("[^.]+$");
  return file.name.match(regex)[0].toLowerCase();
};

export const BUCKET_DOMAIN = "https://extendjob.s3.amazonaws.com/";

export const DATE_TIME_HELPER = {
  DATE_FORMAT: "MM-DD-YYYY",
  DATE_TIME_FORMAT: "MM-DD-YYYY hh:mm a",
  JOB_DATE_FORMAT: "MMM D, YYYY",
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
