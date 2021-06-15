import React from "react";
import { Text, Line } from "../common";
import { HomeContainer, TextContainer, Image } from "./Style";
import "./index.css";

export default function Home(props) {
  return (
    <HomeContainer>
      <TextContainer>
        <Text>Hi! Welcome to my website.</Text>
        <Line src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"></Line>
        <Text>
          "I thank my God upon every rememberance of You." -Phillipians 1:3
        </Text>
      </TextContainer>
      <Image
        src="https://www.ainotes.org/svg/question.svg"
        className="picture"
      ></Image>
    </HomeContainer>
  );
}
