import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PrintIcon from "@mui/icons-material/Print";
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { pink } from '@mui/material/colors';
import { useReactToPrint } from "react-to-print";
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
import { useRef } from "react";


export default function Plus() {

  const { currentOpen } = useContext(ContextData);
  
  let str =
    `*שם מתכון* \n\n ${currentOpen.name}\n`
    +"\n*מרכיבים*\n\n"+ 
    `${"• "+currentOpen.ingredients.toString().replaceAll(",","\n• ")}`
    +"\n*אופן הכנה*\n\n"+
    `${"~ "+currentOpen.instructions.toString().replaceAll(",","\n~ ")}`
   +"\n\n\n\n" + "#my_recipe_book";

 
   const componentRef = useRef();

   const handlePrint = useReactToPrint({
     content: () => componentRef.current,
   });

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
            tooltipTitle={"שתף מתכון"}
          />
          <SpeedDialAction
            icon={
              <FacebookMessengerShareButton url={"https://www.youtube.com/watch?v=9WzIACv_mxs"}>
                <FacebookMessengerIcon className="" size={40} round={true} />
              </FacebookMessengerShareButton>
            }
            tooltipTitle={"שתף מתכון"}
          />
          <SpeedDialAction
            icon={
              <TelegramShareButton url={str}>
                <TelegramIcon className="" size={40} round={true} />
              </TelegramShareButton>
            }
            tooltipTitle={"שתף מתכון"}
          />



          <SpeedDialAction
            icon={
                <PrintIcon  color="primary" className="shareIcon" onClick={handlePrint}/>
            }
            tooltipTitle={"הדפס מתכון"}
          />



          <SpeedDialAction
            icon={
                <CreateIcon color="secondary" className="shareIcon" />
            }
            tooltipTitle={"ערוך מתכון"}
          />
          <SpeedDialAction
            icon={
                <DeleteForeverIcon  sx={{ color: pink[500] }} className="shareIcon" />
            }
            tooltipTitle={"מחק מתכון"}
          />
        </SpeedDial>
      </Box>

      <div ref={componentRef} style={{display:"none"}}>moshe
      {/* <img
              // className="logoNavImg"
              src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
              alt=""
              height={600}
              width={600}
            /> */}
      </div>

    </>
  );
}
