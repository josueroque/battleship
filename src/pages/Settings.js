import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Container,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Header/Header";
import "./Settings.css";

const Settings = (props) => {
  const [selectedLevel, setSelectedLevel] = useState(true);
  const [shootsNumber, setShootsNumber] = useState(0);
  const handleClick = () => {
    props.history.push("/game");
  };
  useEffect(() => {
    localStorage.setItem("shootsNumber", shootsNumber);
  }, [shootsNumber]);
  console.log(props.history);
  return (
    <>
      <div>
        <Navigation history={props.history} />
        <Typography variant='h5' align='center' margin={2}>
          Selecciona el nivel de dificultad
        </Typography>
        <RadioGroup
          className='RadioCondition'
          value={selectedLevel}
          onChange={(e) => {
            switch (e.target.value) {
              case "true":
                setShootsNumber(0);
                break;
              case "false":
                setShootsNumber(100);
                break;
              default:
                setShootsNumber(50);
            }
            setSelectedLevel(e.target.value);
          }}
        >
          <FormControlLabel
            className='GroupLabel'
            control={<Radio />}
            value='true'
            label='Facil'
          />
          <FormControlLabel
            className='GroupLabel'
            control={<Radio />}
            value='false'
            label='Medio'
          />
          <FormControlLabel
            className='GroupLabel'
            control={<Radio />}
            value='NA'
            label='Dificil'
          />
        </RadioGroup>

        <Typography variant='h6' align='center' margin={2}>
          Numero de disparos:
          {shootsNumber}
        </Typography>

        <Typography align='center' margin={2}>
          *0= Infinitos intentos
        </Typography>
        <Container align='center' className='container-button'>
          <Button onClick={handleClick} variant='contained'>
            Ir al Juego
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Settings;
