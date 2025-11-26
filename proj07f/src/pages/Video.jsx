import React, { useState, useEffect } from "react";
import obtainOneContent from "../functions/obtainOneContent.js";
import { useParams } from "react-router-dom";

import Principal from "../components/Principal.jsx";
import Player from "../components/Player.jsx";

export default function Video() {
  const { code } = useParams();
  const [content, defineContent] = useState({});

  useEffect(function () {
    obtainOneContent(code)
      .then(function (answer) {
        if (answer.status == 200) defineContent(answer.data);
        else console.log(answer);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  });

  return (
    <>
      {content && (
        <Principal background={content.cover} size="700px">
          <Player content={content} />
        </Principal>
      )}
    </>
  );
}
