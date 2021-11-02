import React, { useEffect, useState } from "react";
import Navigation from "../../components/Header/Header";
import Board from "../../components/Board/Board";
import Score from "../../components/Score/Score";
import Grid from "@mui/material/Grid";
import { shipTypes } from "./resources";
import "./Game.css";

const occupiedCells = [];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function Game(props) {
  const [ships, setShips] = useState([]);
  const [usedCells, setUsedCells] = useState([]);
  const [failedShoots, setFailedShoots] = useState(0);
  const [successfulShoots, setSuccessfulShoots] = useState(0);
  const [totalTries, setTotalTries] = useState(100);
  const [shootsLeft, setShootsLeft] = useState(100);
  const [sunkenShips, setSunkenShips] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    severity: "warning",
  });

  useEffect(() => {
    if (ships.length === 0) setPositions();
    setTotalTries(parseInt(localStorage.getItem("shootsNumber")));
    setShootsLeft(parseInt(localStorage.getItem("shootsNumber")));

    return () => (occupiedCells.length = 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPositions = () => {
    let currentOrientation = "vertical";

    for (let shipItem of shipTypes) {
      for (let i = 1; i <= shipItem.shipsNumber; i++) {
        if (currentOrientation === "vertical") {
          currentOrientation = "horizontal";
        } else currentOrientation = "vertical";
        let condition = false;
        while (!condition) {
          const randomX = getRndInteger(1, shipItem.initialLimit);
          const randomY = getRndInteger(1, shipItem.initialLimit);
          if (
            assignSpaces(
              randomX,
              randomY,
              currentOrientation,
              shipItem.cellsNumber
            )
          )
            condition = true;
        }
      }
    }
  };

  const assignSpaces = (x, y, orientation, lenght) => {
    let occupied = false;
    let verifiedCells = [];

    for (let i = x; i <= x + (lenght - 1); i++) {
      const itemExists = occupiedCells.filter((item) => {
        if (orientation === "horizontal") {
          return item.x === i && item.y === y;
        } else {
          return item.x === x && item.y === i;
        }
      });

      if (itemExists.length === 0) {
        if (orientation === "horizontal") {
          verifiedCells.push({ x: i, y: y });
        } else {
          verifiedCells.push({ x: x, y: i });
        }
      } else {
        occupied = true;
        break;
      }
    }

    if (!occupied) {
      occupiedCells.push(...verifiedCells);
      setShips((ships) => [...ships, { type: lenght, cells: verifiedCells }]);
    }

    return !occupied;
  };

  return (
    <>
      <Navigation className='game-menu' itemValue={1} history={props.history} />

      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Board
            setTotalTries={setTotalTries}
            setFailedShoots={setFailedShoots}
            setShootsLeft={setShootsLeft}
            setSunkenShips={setSunkenShips}
            setShips={setShips}
            setShowAlert={setShowAlert}
            setUsedCells={setUsedCells}
            setSuccessfulShoots={setSuccessfulShoots}
            setMessage={setMessage}
            message={message}
            successfulShoots={successfulShoots}
            totalTries={totalTries}
            failedShoots={failedShoots}
            shootsLeft={shootsLeft}
            sunkenShips={sunkenShips}
            usedCells={usedCells}
            ships={ships}
            className='game-board'
          />
        </Grid>
        <Grid item xs={6}>
          <Score
            className='game-score'
            totalTries={totalTries}
            failedShoots={failedShoots}
            shootsLeft={shootsLeft}
            sunkenShips={sunkenShips}
            showAlert={showAlert}
            occupiedCells={occupiedCells}
            successfulShoots={successfulShoots}
            ships={ships}
            message={message}
          ></Score>
        </Grid>
      </Grid>
    </>
  );
}
