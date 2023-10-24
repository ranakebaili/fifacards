import React from "react";
import Player from "./Player";
import Players from "../Players"; 
console.log(Players);

function PlayerList() {
    const playerListStyle = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "570px",
    };
    return (
    <div>
        <div className="player-list" style={playerListStyle}>
        {Players.map((player, index) => (
        <Player key={index} {...player} />
        ))}
    </div>
    </div>
    );
}

export default PlayerList;
