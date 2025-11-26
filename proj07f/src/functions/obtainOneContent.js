import axios from "axios";

export default function ObtainOneContent(code) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/content/${code}`,
  });
}
