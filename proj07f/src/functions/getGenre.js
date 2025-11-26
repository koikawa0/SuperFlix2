import axios from "axios";

export default function getGenre() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/api/genre",
  });
}
