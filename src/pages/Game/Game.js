import React, { useEffect, useRef, useState } from "react";
import Navigation from "../../components/Navigation";
import Board from "../../components/Board";
import { shipTypes } from "./resources";
import "./Game.css";

const occupiedCells = [];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function Game() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    setPositions();
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
      // ships.push({ type: lenght, cells: verifiedCells });
      /* if (ships.length > 0) {
        setShips([...ships, { type: lenght, cells: verifiedCells }]);
      } else setShips([{ type: lenght, cells: verifiedCells }]); */
      setShips((ships) => [...ships, { type: lenght, cells: verifiedCells }]);
    }

    return !occupied;
  };
  console.log(ships);
  return (
    <>
      <Navigation className='game-menu' />
      <Board />
    </>
  );
}
