import React from "react";
import Card from "react-bootstrap/Card";


function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <div className="player-card">
        <div className='image'></div>
        <div>
            <Card className="Card" style={{ width: "18rem" }}>
                <Card.Body>
                <img className="Img" src={imageUrl} alt={name} />
                <Card.Title className="Title">{name}</Card.Title>
                <Card.Text className="Text">
                    <strong>Team:</strong> {team}
                    <br />
                    <strong>Nationality:</strong> {nationality}
                    <br />
                    <strong>Jersey Number:</strong> {jerseyNumber}
                    <br />
                    <strong>Age:</strong> {age}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default Player;



