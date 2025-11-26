import React from "react";
import styled from "styled-components";

const Model = styled.div`
  margin: 32px 0;
  padding: 0 32px;
`;
const ModelTitle = styled.div`
  font-size: 16pt;
`;

const InnerModel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
`;

const Content = styled.img`
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    height: 160px;
    margin: 16px 0;
    min-width: 256px;
    object-fix: cover;
    transition: 0.2s;

    &:hover {
        transform: scale(110%);
        transition: 0.2s; 
`;

export default function Session(props) {
  return (
    <Model>
      <ModelTitle>{props.genre}</ModelTitle>
      <InnerModel>
        {Array.isArray(props.content) &&
          props.content.map(function (content, index) {
            if (content.genre === props.genre)
              return (
                <a href={"/video/" + content["_id"]} key={index}>
                  <Content src={content.cover} alt="cover" />
                </a>
              );
          })}
      </InnerModel>
    </Model>
  );
}
