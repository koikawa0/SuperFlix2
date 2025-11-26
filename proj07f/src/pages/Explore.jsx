import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation.jsx";
import Featured from "../components/Featured.jsx";
import Session from "../components/Session.jsx";
import getContent from "../functions/getContent.js";
import getGenre from "../functions/getGenre.js";

export default function Explore() {
  const [content, setContent] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(function () {
    getContent()
      .then(function (answer) {
        if (answer.status == 200) setContent(answer.data);
        else console.log(answer);
      })
      .catch(function (error) {
        console.log(error);
      });
    getGenre()
      .then(function (answer) {
        if (answer.status == 200) setGenre(answer.data);
        else if (answer.status == 404) alert("No genre found!");
        else if (answer.status == 505) alert("Server Problems!");
        else console.log(answer);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <>
      <Featured>
        <Navigation />
        {genre.length > 0 &&
          genre.map(function (genre, index) {
            return <Session key={index} genre={genre} content={content} />;
          })}
      </Featured>
    </>
  );
}
