import React from "react";
import styled from "styled-components";
import ValidateLogin from "../functions/validateLogin";
import { useNavigate } from "react-router-dom";

const Model = styled.div`
  background: #fff;
  border-radius: 4px;
  color: #222;
  padding: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormTitle = styled.div`
  font-size: 24pt;
  font-weight: bold;
  text-align: center;
`;

export default function Enter() {
  const navegar = useNavigate();

  function Validate(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    ValidateLogin(email, password)
      .then(function (answer) {
        if (answer.status === 202) {
          navegar("/explore");
        }
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  return (
    <Model>
      <Form action="/explore" method="GET" onSubmit={Validate} as="form">
        <FormTitle>Enter</FormTitle>
        <input type="text" placeholder="email" required />
        <input type="password" placeholder="*****" required />
        <input type="submit" value="Enter" />
      </Form>
    </Model>
  );
}
