import React from "react";
import { Line } from "../common";
import { HomeContainer, TextContainer, Image, HomeText } from "./Style";
import "./index.css";

export default function Home(props) {
  return (
    <HomeContainer>
      <TextContainer>
        <HomeText>Hi! Welcome to my website.</HomeText>
        <Line src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"></Line>
        <HomeText>
          "I thank my God upon every rememberance of You." -Phillipians 1:3
        </HomeText>
      </TextContainer>
      <Image
        src="https://www.ainotes.org/svg/question.svg"
        className="picture"
      ></Image>
    </HomeContainer>
  );
}
