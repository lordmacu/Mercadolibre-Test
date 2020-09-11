import styled from "@emotion/styled";
import React from "react";
const ErrorMessage = styled.p`
  text-align:center;
  padding-top:50px;
  padding-bottom:50px;
`
const Error = () => {
  return (
    <ErrorMessage className="card container">
      <p>Error por favor intenta nuevamente</p>
    </ErrorMessage>
  );
};
export default Error;
