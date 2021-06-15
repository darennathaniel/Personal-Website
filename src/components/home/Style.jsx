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
`;

export const Image = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 330px;
  }
`;
