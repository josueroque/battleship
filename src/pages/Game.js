import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Alert from "@mui/material/Alert";
import "./Game.css";

const colums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rows = [
  { key: "INITIAL", value: ".", className: "board-item-initial" },
  { key: "A", value: "A", className: "board-item" },
  { key: "B", value: "B", className: "board-item" },
  { key: "C", value: "C", className: "board-item" },
  { key: "D", value: "D", className: "board-item" },
  { key: "E", value: "E", className: "board-item" },
  { key: "F", value: "F", className: "board-item" },
  { key: "G", value: "G", className: "board-item" },
  { key: "H", value: "H", className: "board-item" },
  { key: "I", value: "I", className: "board-item" },
  { key: "J", value: "J", className: "board-item" },
];

const ColorAlerts = () => {
  return (
    <Alert severity='success' color='info'>
      This is a success alert — check it out!
    </Alert>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Game() {
  const [showAlert, setShowAlert] = useState(false);
  const handleSelection = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div className='board'>
      {showAlert ? <ColorAlerts /> : null}

      <Grid container spacing={0} columns={11}>
        {colums.map((columnItem) => (
          <Grid item xs={1} key={"column-" + columnItem}>
            {rows.map((rowItem) => (
              <Item className={rowItem.className} onClick={handleSelection}>
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
  );
}
