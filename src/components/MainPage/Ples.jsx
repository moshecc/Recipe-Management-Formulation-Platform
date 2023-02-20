import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { useContext } from "react";
import { ContextData } from "../../App";

export default function Ples() {
  const { currentOpen } = useContext(ContextData);

  return (
    <>
      <Box sx={{}}>
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          <SpeedDialAction
            icon={
              <WhatsappShareButton url={currentOpen}>
                <WhatsappIcon />
              </WhatsappShareButton>
            }
            tooltipTitle={"שתף"}
          />
        </SpeedDial>
      </Box>
    </>
  );
}
