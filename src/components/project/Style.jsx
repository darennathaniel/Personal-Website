import styled from "styled-components";
import { Container, Text } from "../common";

export const ProjectContainer = styled(Container)`
  @media screen and (max-width: 768px) {
    height: 290vh;
  }
`;

export const ProjectTitle = styled(Text)`
  font-weight: bold;
  font-size: 20px;
`;

export const ProjectText = styled(Text)`
  font-size: 15px;
`;
