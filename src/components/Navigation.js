import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SettingsIcon from "@mui/icons-material/Settings";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HistoryIcon from "@mui/icons-material/History";

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='game-menu' sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='CONFIGURAR' icon={<SettingsIcon />} />
        <BottomNavigationAction label='JUGAR' icon={<SportsEsportsIcon />} />
        <BottomNavigationAction label='REGISTROS' icon={<HistoryIcon />} />
      </BottomNavigation>
    </Box>
  );
}
