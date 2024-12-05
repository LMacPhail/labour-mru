import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #00edce;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <span className="loader"></span>
    </SpinnerContainer>
  );
};
