import axios from "axios";

export default function saveContent(content) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/content",
    data: {
      cover: content.cover,
      soundtrack: content.soundtrack,
      title: content.title,
      description: content.description,
      genre: content.genre,
      year: parseInt(content.year),
      duration: parseInt(content.duration),
      agegroup: parseInt(content.agegroup),
    },
  });
}
