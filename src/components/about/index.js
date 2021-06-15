import React from "react";
import { Line } from "../common";
import {
  BioContainer,
  TextContainer,
  Title,
  HeadList,
  List,
  Image,
} from "./Style";

export default function About(props) {
  return (
    <BioContainer>
      <Image src="https://media-exp1.licdn.com/dms/image/C5603AQGShhMlaO38bQ/profile-displayphoto-shrink_800_800/0/1612451344342?e=1626912000&v=beta&t=1Rhrb155E5gnZCJWketEOa6nVeD59gIWfqBPLLbofr8"></Image>
      <TextContainer>
        <Title>About</Title>
        <Line src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"></Line>
        <HeadList>
          <List>
            <i class="fas fa-signature"></i> Daren Nathaniel Janto
          </List>
          <List>
            <i class="fas fa-book"></i> Computer Science
          </List>
          <List>
            <i class="fas fa-university"></i> Nanyang Technological University
            '24
          </List>
          <List>
            <i class="fas fa-location-arrow"></i> Jakarta, Indonesia
          </List>
        </HeadList>
      </TextContainer>
    </BioContainer>
  );
}
