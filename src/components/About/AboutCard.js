import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

  <p style={{ textAlign: "justify", margin: "0 20px" }}>
      Hi, I’m GhanaShyam Sunuwar from Kathmandu, Nepal. 
      <br />
      I hold a Bachelor’s degree in Computer Applications (BCA) from Triton SS College.
      <br />
      <br />
      I’m a passionate React.js frontend developer with expertise in building 
      engaging user interfaces, crafting seamless user experiences, and exploring 
      the latest frontend technologies. I work using React.js, TailwindCSS, 
      Redux to create innovative web solutions.
      <br />
      <br />
      Beyond coding, I enjoy playing games, video/photo editing, and remixing songs.
    </p>

          <p style={{ color: "#f8b65f" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Ghanashyam Sunuwar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
