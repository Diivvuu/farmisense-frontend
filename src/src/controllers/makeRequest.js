import axios from "axios";

export default async function makeRequest(path, method = "GET", body) {
  let url = `https://crop-yield-production-fastapi.onrender.com${path}`;

  if (window.location.href.indexOf("localhost") !== -1)
    url = `http://127.0.0.1:8000${path}`;

  try {
    if (method == "GET") {
      const res = await axios.get(url);
      return res.data;
    } else {
      const res = await axios.post(url, body);
      return res.data;
    }
  } catch (e) {
    console.log(e);
    if (e.response) {
      console.log(e.response.data.message);
      throw Error(e.response.data.message);
    } else {
      throw Error(e.message);
    }
  }
}
