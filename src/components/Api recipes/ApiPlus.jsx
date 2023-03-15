import React from 'react'
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';

export default function ApiPlus() {
  return (
    <>
      <Box>
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          <SpeedDialAction
          onClick={""}
            icon={
             <FavoriteIcon  sx={{ color: red[500] }}/>
            }
            tooltipTitle={"הכנס למתכונים שלי"}
          />
          <SpeedDialAction
          onClick={""}
          className=""
            icon={
             <HomeIcon  sx={{ color: green[500] }}/>
            }
            tooltipTitle={"לאתר המתכון"}
          />
        </SpeedDial>
      </Box>
    </>
  )
}
