import axios from "axios";

export const queryString = (obj = {}) => {
  let data = Object.keys(obj).reduce((str, key, i) => {
    let delimiter, val;
    delimiter = i === 0 ? "?" : "&";
    key = encodeURIComponent(key);
    val = encodeURIComponent(obj[key]);
    return [str, delimiter, key, "=", val].join("");
  }, "");
  // console.log('RESULT ==>', data);
  return data;
};

export const getWidgetData = async (url, filter) => {
  const params = queryString(filter);
  try {
    return await axios(url + params);
  } catch (error) {
    return { status: 500 };
  }
};
