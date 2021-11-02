import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HistoryIcon from "@mui/icons-material/History";

export default function Navigation(props) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (props.itemValue) setValue(props.itemValue);
  }, []);
  console.log(props);
  return (
    <>
      <Typography variant='h3' className='game-title' align='center'>
        Battleship!
      </Typography>
      <Box className='game-menu' sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);
            if (newValue !== props.itemValue) {
              switch (newValue) {
                case 0:
                  props.history.push("./settings");
                  break;
                case 1:
                  props.history.push("./game");
                  break;
                case 2:
                  props.history.push("./records");
                  break;
                default:
              }
            }
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label='CONFIGURAR' icon={<SettingsIcon />} />
          <BottomNavigationAction label='JUGAR' icon={<SportsEsportsIcon />} />
          <BottomNavigationAction label='REGISTROS' icon={<HistoryIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
