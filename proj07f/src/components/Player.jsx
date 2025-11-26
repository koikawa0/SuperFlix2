import React from "react";
import styled from "styled-components";

const Model = styled.div`
  background: #222;
  border-radius: 8px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const TrailerModel = styled.iframe`
  border: none;
  height: 500px;
  width: 100%;
`;

const DataModel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const Description = styled.div`
  text-align: justify;
`;

const Organizer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Player(props) {
  return (
    <Model>
      <TrailerModel src="{props.content.track}"></TrailerModel>
      <DataModel>
        <Title>{props.content.title}</Title>
        <Organizer>
          <div>{props.content.year}</div>
          <div>{props.content.duration}</div>
          <div>+ {props.content.trackNumber}</div>
        </Organizer>
        <Description>{props.content.description}</Description>
      </DataModel>
      <Player content={content} />
    </Model>
  );
}
