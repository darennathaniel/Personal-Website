import React from "react";
import { ProjectContainer, ProjectText, ProjectTitle } from "./Style";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { projects } from "./data";

export default function Project(props) {
  return (
    <ProjectContainer>
      <CardDeck>
        {projects.map((data) => (
          <Card>
            <Card.Img
              variant="top"
              src="https://petkeen.com/wp-content/uploads/2021/01/Hamster.jpg"
            ></Card.Img>
            <Card.Body>
              <Card.Title>
                <ProjectTitle>{data.title}</ProjectTitle>
              </Card.Title>
              <Card.Text>
                <ProjectText>{data.text}</ProjectText>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </ProjectContainer>
  );
}
