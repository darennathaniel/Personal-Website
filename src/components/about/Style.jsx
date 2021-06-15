import styled from "styled-components";
import { Container, Text } from "../common";

export const BioContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TextContainer = styled.div`
  flex-direction: column;
  width: 450px;
  text-align: center;
`;

export const HeadList = styled.ul`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: start;
`;

export const List = styled.li`
  list-style-type: none;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 2em;
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  box-shadow: -6px 6px 5px 5px #313131;
  border-radius: 5%;
  inset: 0px 0px 20px 10px rgba(0, 0, 0, 0.6);
`;
