import styled from "styled-components";
import { Container } from "../common";

export const HomeContainer = styled(Container)`
  justify-content: space-evenly;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  } ;
`;

export const TextContainer = styled(Container)`
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-bottom: -80px;
  } ;
`;

export const Image = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 330px;
    margin-bottom: 100px;
  }
`;
