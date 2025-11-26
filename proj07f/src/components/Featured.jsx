import React from "react";
import styled from "styled-components";

const Model = styled.div`
  background-image: url(${(props) => props.fundo});
  background-size: cover;
  background-position: center;
  height: 80vh;
`

export default function Featured(props) {
    return <Model background={props.background}>
        {props.children}
    </Model>
}



