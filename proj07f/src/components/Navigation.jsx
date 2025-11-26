import React from "react";
import styled from "styled-components";

const Model = styled.div`
  align-items: center;
  background: linear-gradient(black, transparent);
  display: flex;
  gap: 32px;
  height: 32px;
  padding: 32px;
`;

const ModelImage = styled.img`
  height: 48px;
`;

const ModelLink = styled.a`
  color: #fff;
`;

export default function Navigation() {
  return (
    <Model>
      <ModelImage src="./Logo.png" alt="logo" />
      <ModelLink href="#">Ínicio</ModelLink>
      <ModelLink href="#">Movies</ModelLink>
      <ModelLink href="#">Series</ModelLink>
      <ModelLink href="#">Hot</ModelLink>
    </Model>
  );
}
