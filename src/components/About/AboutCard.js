import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const experiences = [
    {
      company: "Javeo-Traveller Private Limited",
      location: "Bengaluru",
      duration: "Nov 2022 - Jan 2025",
    },
    {
      company: "Rialtes",
      location: "Pune",
      duration: "Apr 2021 - Aug 2022",
    },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Kumar </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I had been recently employed as a MERN Full Stack Developer at
            Javeo-Traveller Private Limited.
            <br />
            <br />
          </p>

          <h5 style={{fontSize:"29px",marginBottom:"20px"}}>Work Experiences</h5>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                margin: "0 auto",
                borderCollapse: "collapse",
                border: "2px solid #999",
              }}
            >
              <thead>
                <tr>
                  {["Company", "Location", "Duration"].map((heading) => (
                    <th
                      key={heading}
                      className="purple"
                      style={{
                        border: "1px solid #999",
                        textAlign: "center",
                        padding: "12px"/* ,
                        backgroundColor: "#f2f2f2" */,
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {experiences.map(({ company, location, duration }, idx) => (
                  <tr key={idx}>
                    <td
                      style={{
                        border: "1px solid #999",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      {company}
                    </td>
                    <td
                      style={{
                        border: "1px solid #999",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      {location}
                    </td>
                    <td
                      style={{
                        border: "1px solid #999",
                        padding: "12px",
                        textAlign: "center",
                        fontSize: "16px",
                      }}
                    >
                      {duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
