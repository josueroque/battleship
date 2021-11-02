import { Typography } from "@mui/material";
import React from "react";
import "./Score.css";
import MuiAlert from "../MuiAlert";
const Score = (props) => {
  return (
    <div className='game-score'>
      <Typography>*Total Intentos: {props.totalTries} </Typography>
      <Typography>Disparos Exitosos: {props.successfulShoots} </Typography>
      <Typography>Disparos Fallados: {props.failedShoots} </Typography>
      <Typography>Intentos Restantes: {props.shootsLeft} </Typography>
      <Typography>Barcos Hundidos: {props.sunkenShips} </Typography>
      <Typography align='left'>*0= Infinitos intentos</Typography>
      {props.showAlert ? (
        <div className='score-alert'>
          <MuiAlert
            message={props.message.text}
            severity={props.message.severity}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Score;
