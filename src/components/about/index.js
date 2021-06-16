import React from "react";
import { Line } from "../common";
import {
  BackgroundColor,
  BioContainer,
  TextContainer,
  Title,
  HeadList,
  List,
  Image,
  EduLine,
  EduImage,
  EduContainer,
  SubContainer,
  NTULogo,
  PenaburLogo,
  EduText,
  EduList,
  EduTextContainer,
  EduNTUContainer,
  EduPenaburContainer,
} from "./Style";
import "./index.css";

export default function About(props) {
  return (
    <BackgroundColor>
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
            <List>
              <i class="fas fa-birthday-cake"></i> 26th September 2002
            </List>
            <List>
              <i class="fas fa-code"></i> C, Python, React JS, HTML, CSS
            </List>
          </HeadList>
        </TextContainer>
      </BioContainer>
      <EduContainer data-aos="fade-up" data-aos-duration="500">
        <EduTextContainer>
          <Title>Education</Title>
          <Line src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Line_segment.svg/375px-Line_segment.svg.png"></Line>
          <SubContainer>
            <NTULogo src="https://i.pinimg.com/originals/5f/23/6b/5f236bc3bec1c44481bc661684bec650.png"></NTULogo>
            <EduNTUContainer>
              <EduText>Nanyang Technological University</EduText>
              <EduText>August 2020 - May 2024</EduText>
              <EduLine src="https://dmassociates.files.wordpress.com/2014/12/thin-black-line.png?w=640"></EduLine>
              <HeadList>
                <EduList>CGPA : 4.52/5.00</EduList>
                <EduList>Expected Honours (Highest Distinction)</EduList>
              </HeadList>
            </EduNTUContainer>
          </SubContainer>
          <SubContainer>
            <PenaburLogo src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/JZ7Z8L7ZEDQHJ6HX59NSETJNBMA786BSHTDUJK86-5d8862f3.png"></PenaburLogo>
            <EduPenaburContainer>
              <EduText>SMAK 6 BPK Penabur Jakarta</EduText>
              <EduText>July 2017 - April 2020</EduText>
              <EduLine src="https://dmassociates.files.wordpress.com/2014/12/thin-black-line.png?w=640"></EduLine>
              <HeadList>
                <EduList>Ranked 16th in 2020 Cohort</EduList>
              </HeadList>
            </EduPenaburContainer>
          </SubContainer>
        </EduTextContainer>
        <EduImage
          src="https://www.ainotes.org/svg/extract.svg"
          className="picture"
        ></EduImage>
      </EduContainer>
    </BackgroundColor>
  );
}
