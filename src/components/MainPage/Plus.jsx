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
  HatenaShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
} from "react-share";
import { useContext } from "react";
import { ContextData } from "../../App";
import "./Plus.css";

export default function Plus() {
  const { currentOpen } = useContext(ContextData);
  let str =
    ` *שם מתכון* \n\n ${currentOpen.name} \n\n\n\n ` + "@ my recipe book";

  return (
    <>
      <Box>
        <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
          <SpeedDialAction
            icon={
              <WhatsappShareButton url={str}>
                <WhatsappIcon className="" size={40} round={true} />
              </WhatsappShareButton>
            }
            tooltipTitle={"שתף"}
          />
          <SpeedDialAction
            icon={
              <FacebookMessengerShareButton url={"https://www.youtube.com/watch?v=9WzIACv_mxs"}>
                <FacebookMessengerIcon className="" size={40} round={true} />
              </FacebookMessengerShareButton>
            }
            tooltipTitle={"שתף"}
          />
          <SpeedDialAction
            icon={
              <TelegramShareButton url={str}>
                <TelegramIcon className="" size={40} round={true} />
              </TelegramShareButton>
            }
            tooltipTitle={"שתף"}
          />
          <SpeedDialAction
            icon={
                <PrintIcon className="shareIcon" />
            }
            tooltipTitle={"הדפסה"}
          />
        </SpeedDial>
      </Box>
    </>
  );
}
