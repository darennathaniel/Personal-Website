import styled from "styled-components";
import { Container, Text, Line } from "../common";

export const BackgroundColor = styled.div`
  background-color: #f0ffff;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export const BioContainer = styled(Container)`
  justify-content: space-evenly;
  flex-direction: row;
  height: 100vh;
  scroll-snap-align: start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  flex-direction: column;
  width: 450px;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 375px;
    margin-top: -70px;
  }
  @media screen and (max-width: 376px) {
    margin-top: -50px;
  }
`;

export const HeadList = styled.ul`
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: start;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
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
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  } ;
`;

export const EduLine = styled(Line)`
  width: 200px;
  margin-top: -10vh;
  margin-bottom: -10vh;
  @media screen and (max-width: 768px) {
    margin-top: -11vh;
    margin-bottom: -11vh;
  }
  @media screen and (max-height: 668px) {
    margin-top: -14vh;
    margin-bottom: -14vh;
  }
`;

export const EduImage = styled.img`
  width: 450px;
  @media screen and (max-width: 768px) {
    width: 0px;
  }
`;

export const EduContainer = styled(Container)`
  height: 100vh;
  margin-top: -100px;
  flex-direction: row;
  scroll-snap-align: start;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    flex-direction: column;
    height: 135vh;
  }
  justify-content: space-evenly;
`;

export const SubContainer = styled(Container)`
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 40vh;
  }
  justify-content: space-evenly;
  height: 20vh;
`;

export const NTULogo = styled.img`
  width: 255px;
  @media screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`;

export const PenaburLogo = styled.img`
  height: 150px;
  @media screen and (max-width: 768px) {
    margin-top: 0vh;
  }
  @media screen and (max-height: 668px) {
    margin-top: -3vh;
  }
`;

export const EduText = styled(Text)`
  font-style: italic;
  font-size: 16px;
  margin: 0px;
  margin-left: 15px;
`;

export const EduList = styled(List)`
  font-size: 15px;
  list-style-type: circle;
`;

export const EduTextContainer = styled(TextContainer)`
  width: 600px;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const EduNTUContainer = styled(TextContainer)`
  display: flex;
  width: 600px;
  text-align: start;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-top: 5px;
    padding: 20px;
  }
`;

export const EduPenaburContainer = styled(TextContainer)`
  display: flex;
  width: 280px;
  text-align: start;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 20px;
    margin-top: -25px;
  }
`;
