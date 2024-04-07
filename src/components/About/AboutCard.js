import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, My name's <span className="purple">Neramid Benjawan </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />
            Now, I’m bachelor’s degree student in <span className="purple">Electronic Computer Technology</span> at 
            <span className="purple"> King Mongkut University of Technology North Bangkok</span>.
            I’m seeking for an opportunity to join an internship in <span className="purple">Web Developer</span> Or
            <span className="purple"> Front-End Developer</span>.
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
