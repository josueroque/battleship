import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { margin } from "@mui/system";

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
        <BottomNavigationAction label='JUGAR' icon={<RestoreIcon />} />
        <BottomNavigationAction label='CONFIGURACION' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='REGISTROS' icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
