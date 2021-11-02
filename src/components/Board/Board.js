import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./Board.css";
import swal from "sweetalert";

const colums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rows = [
  { key: "INITIAL", value: ".", number: 0, className: "board-item-initial" },
  { key: "A", value: "A", number: 1, className: "board-item" },
  { key: "B", value: "B", number: 2, className: "board-item" },
  { key: "C", value: "C", number: 3, className: "board-item" },
  { key: "D", value: "D", number: 4, className: "board-item" },
  { key: "E", value: "E", number: 5, className: "board-item" },
  { key: "F", value: "F", number: 6, className: "board-item" },
  { key: "G", value: "G", number: 7, className: "board-item" },
  { key: "H", value: "H", number: 8, className: "board-item" },
  { key: "I", value: "I", number: 9, className: "board-item" },
  { key: "J", value: "J", number: 10, className: "board-item" },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1.6),
  textAlign: "center",
  verticalAlign: "center",
  square: true,
  fontsize: "small",
  color: theme.palette.text.secondary,
}));

export default function Board(props) {
  const [disabledBoard, setDisabledBoard] = useState(false);

  const handleSelection = (item) => {
    if (!disabledBoard) {
      const itemNane = item.target.attributes.name.value.toString();
      let xPosition;
      let yPosition;
      let cellExists = false;

      if (isNaN(itemNane.split("")[1])) {
        xPosition = parseInt(itemNane[0]);
        yPosition = itemNane.substring(2);
      } else {
        xPosition = parseInt(itemNane.substring(0, 2));
        yPosition = itemNane.substring(3);
      }

      if (
        props.usedCells.filter(
          (item) => item.x === xPosition && item.y === yPosition
        ).length === 0
      ) {
        let positions = props.ships.map((item) => item.cells);

        let allShooted = true;

        positions.forEach((item) => {
          item.forEach((innerItem) => {
            if (
              parseInt(innerItem.x) === parseInt(xPosition) &&
              parseInt(innerItem.y) === parseInt(yPosition)
            ) {
              innerItem.shooted = true;
              cellExists = true;
              item.forEach((confirmItem) => {
                if (!confirmItem.shooted) allShooted = false;
              });
              if (allShooted) {
                swal("Has hundido un barco");
                props.setSunkenShips(props.sunkenShips + 1);

                if (props.sunkenShips + 1 === 10) {
                  swal("Felicidades has ganado el juego");
                  setDisabledBoard(true);
                }
              }
              console.log(props.ships);
            }
          });
        });

        props.setUsedCells((cells) => [
          ...cells,
          { x: xPosition, y: yPosition },
        ]);
        if (props.shootsLeft - 1 >= 0)
          props.setShootsLeft(props.shootsLeft - 1);
        if (props.shootsLeft === 0 && props.totalTries !== 0) {
          swal("Lamentablemente has perdido");
          setDisabledBoard(true);
        }

        console.log(cellExists);
        if (cellExists) {
          props.setSuccessfulShoots(props.successfulShoots + 1);
          props.setMessage({
            text: "Has acertado el tiro",
            severity: "success",
          });
        } else {
          props.setFailedShoots(props.failedShoots + 1);
          props.setMessage({
            text: "Has fallado el tiro",
            severity: "warning",
            color: "warning",
          });
        }
      }
    }
  };

  useEffect(() => {
    console.log(props.message);
    if (props.message.text !== "") props.setShowAlert(true);
    setTimeout(() => {
      props.setShowAlert(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.message]);

  return (
    <>
      <div className='board'>
        <Grid
          container
          disabled={disabledBoard}
          spacing={0}
          columns={colums.length}
        >
          {colums.map((columnItem) => (
            <Grid item xs={1} key={"column-" + columnItem}>
              {rows.map((rowItem) => (
                <Item
                  name={`${columnItem}-${rowItem.number}`}
                  key={`item-${columnItem}-${rowItem.key}`}
                  className={
                    rowItem.key !== "INITIAL"
                      ? columnItem !== 0
                        ? "board-item"
                        : ""
                      : ""
                  }
                  onClick={handleSelection}
                >
                  {columnItem === 0
                    ? rowItem.value
                    : rowItem.key === "INITIAL"
                    ? columnItem
                    : "."}
                </Item>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
