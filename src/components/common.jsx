import styled, { keyframes } from "styled-components";

const fade = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

export const Container = styled.div`
  background-color: #f0ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${fade} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const Text = styled.p`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Line = styled.img`
  margin-top: -20vh;
  margin-bottom: -18vh;
  @media screen and (max-width: 768px) {
    width: 270px;
    margin-top: -17vh;
    margin-bottom: -15vh;
  }
  @media screen and (max-width: 375px) {
    margin-top: -19vh;
    margin-bottom: -17vh;
  }
`;
