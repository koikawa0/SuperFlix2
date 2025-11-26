import React from "react";
import styled from "styled-components";

const Model = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  height: 100vh;
`;

const Bar = styled.div`
  background: linear-gradient(black, transparent);
  padding: 32px;
`;
const ImageBar = styled.img`
  display: block;
  margin: 0 auto;
  height: 48px;
`;

const Message = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  width: ${(props) => props.size};
`;

export default function Principal(props) {
  return (
    <Model background={props.background}>
      <Bar>
        <ImageBar src="/Logo.png" alt="Logo" />
      </Bar>
      <Message size={props.size}>{props.children}</Message>
    </Model>
  );
}
