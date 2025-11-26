import React from "react";
import Principal from "../components/Principal.jsx";
import Form from "../components/Form.jsx";

export default function Panel() {
  return (
    <>
      <Principal background="./background.jpg" size="480px">
        <Form />
      </Principal>
    </>
  );
}
