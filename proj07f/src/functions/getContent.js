import axios from "axios";

export default function getContent() {
  return axios({
    method: "GET",
    url: `http://localhost:4000/api/content/690bcc7651847f78cb9dc29e`,
  });
}
