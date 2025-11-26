import React, { useState } from "react";
import InitialContent from "../datas/InitialContent";
import styled from "styled-components";
import saveContent from "../functions/saveContent";

const Model = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`;

const InModel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Form() {
  const [content, setContent] = useState(InitialContent);

  function Change(event) {
    const field = event.target.name;
    const value = event.target.value;
    setContent({ ...content, [field]: value });
  }

  function Send(event) {
    event.preventDefault();
    saveContent(content)
      .then(function (answer) {
        if (answer.status === 201) alert("Content sent successfully!");
        else console.log(answer);
      })
      .catch(function (error) {
        console.log(error);
      });
    setContent(InitialContent);
  }
  return (
    <Model>
      <InModel onSubmit={Send}>
        <input
          value={content.cape}
          onChange={Change}
          type="url"
          name="cape"
          placeholder="Cape"
          required
        />

        <input
          value={content.soundtrack}
          onChange={Change}
          type="url"
          name="soundtrack"
          placeholder="Soundtrack"
          required
        />

        <input
          value={content.title}
          onChange={Change}
          type="text"
          name="title"
          placeholder="Title"
          required
        />

        <input
          value={content.description}
          onChange={Change}
          type="text"
          name="description"
          placeholder="Description..."
          required
        />

        <input
          value={content.genre}
          onChange={Change}
          type="text"
          name="genre"
          placeholder="Genre"
          required
        />
        <input
          value={content.year}
          onChange={Change}
          type="number"
          name="year"
          placeholder="Year (ex.: 2020)"
          required
        />
        <input
          value={content.duration}
          onChange={Change}
          type="number"
          name="duration"
          placeholder="Duration (ex.: 90min)"
          required
        />
        <input
          value={content.agegroup}
          onChange={Change}
          type="number"
          name="agegroup"
          placeholder="Age Group (ex.: +18)"
          required
        />

        <input type="submit" value="Send" />
      </InModel>
    </Model>
  );
}
