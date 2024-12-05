import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  Grow,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DialogActions from "@mui/material/DialogActions";
import { TbChecklist } from "react-icons/tb";
import { PiShippingContainerDuotone } from "react-icons/pi";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { GiCargoShip } from "react-icons/gi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function ContainerDirect({ show, handleClose }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleCloseDialog = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    handleClose();
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (!show) {
    return null;
  }

  return (
    <Dialog
      open={show}
      onClose={handleCloseDialog}
      TransitionComponent={Transition}
      disableEscapeKeyDown
      id='dialogHdBtnContDlg'
    >
      <DialogTitle className="dialog-header">
        Transit Information
        <IconButton
          style={{ position: "absolute", right: 13, top: 15 }}
          onClick={handleCloseDialog}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {/* Top Section (Company, PO, Material, SO#, etc.) */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          marginBottom={2}
          marginTop={2}
        >
          <Box>
            <Typography variant="h6" color="darkblue">
              AIREFCO INC
            </Typography>
            <Typography>
              2102 Frank Alberta RD E{" "}
              <span className="contDialogSeperator">|</span> FIFE-WA{" "}
              <span className="contDialogSeperator">|</span> 98424-3799
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            className="contBoxShadow"
            style={{ marginTop: "10px" }}
          >
            <Box>
              <TbChecklist fontSize="65px" />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: "5px", width: "100%", marginTop: "10px" }}
            >
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan conFontClass">PO#:</span>
                <span className="matSpan conFontClass">Material:</span>
                <span className="soSpan conFontClass">SO#:</span>
                <span className="itemSpan conFontClass">Item:</span>
                <span className="conFontClass">Quantity:</span>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan">1234567</span>
                <span className="matSpan">Comfort 90 GF</span>
                <span className="soSpan">5587142</span>
                <span className="itemSpan">60</span>
                <span>2</span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          marginBottom={2}
          marginTop={2}
        >
          <Box display="flex" flexDirection="row">
            <Box style={{ width: "50%" }}>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="3px"
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "5px",
                    paddingTop:'20px',
                    paddingBottom:'20px',
                    backgroundColor: "lightblue",
                  }}
                >
                  <PiShippingContainerDuotone className="shipContainerIcon" />
                  <span className="containerTxt">Container Details</span>
                </Box>
                <Box className="divBottomLin"></Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: "15px", width: "100%", marginTop: "20px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                style={{ marginBottom: "5px" }}
              >
                <span className="poSpan conFontClass">
                  <span className="underline">Bil</span><span>l of lading#</span>:
                </span>
                <span className="matSpan conFontClass">
                  <span className="underline">Con</span><span>tainer #</span>:
                </span>
                <span className="soSpan conFontClass">
                  <span className="underline">Sup</span><span>lier PO #</span>:
                </span>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan valueTxtClass">1234567</span>
                <span className="matSpan valueTxtClass">Comfort 90 GF</span>
                <span className="soSpan valueTxtClass">5587142</span>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box style={{ width: "50%" }}>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="3px"
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "5px",
                    paddingBottom:"12%",
                    backgroundColor: "lightblue",
                  }}
                >
                  <GiCargoShip className="shipDestIcon" />
                  <span className="DestTxt">To Destination Port</span>
                </Box>
                <Box className="divBottomLin"></Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: "15px", width: "100%", marginTop: "20px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                style={{ marginBottom: "5px" }}
              >
                <span className="poSpan conFontClass">
                  <span className="underline">Ves</span><span>sel#</span>:
                </span>
                <span className="matSpan conFontClass">
                  <span className="underline">Loa</span><span>d Port</span>:
                </span>
                <span className="soSpan conFontClass">
                  <span className="underline">Loa</span><span>d Port ETD</span>:
                </span>
                <span className="soSpan conFontClass">
                  <span className="underline">Loa</span><span>d Port Actual Depature</span>:
                </span>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan valueTxtClass">1234567</span>
                <span className="matSpan valueTxtClass">Comfort 90 GF</span>
                <span className="soSpan valueTxtClass">04/28/2024</span>
                <span className="soSpan valueTxtClass">04/28/2024</span>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                style={{ marginBottom: "5px" ,marginTop:"8px"}}
              >
                <span className="poSpan conFontClass">
                  <span className="underline">Por</span><span>t of Discharge:</span>:
                </span>
                <span className="matSpan conFontClass">
                  <span className="underline">ETA</span>:
                </span>
                <span className="paaSpan conFontClass">
                  <span className="underline">Dis</span><span>charge Port Actual Arrival</span>:
                </span>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan valueTxtClass">1234567</span>
                <span className="matSpan valueTxtClass">Comfort 90 GF</span>
                <span className="soSpan valueTxtClass">04/28/2024</span>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box style={{ width: "50%" }}>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="3px"
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "5px",
                    paddingTop:'20px',
                    paddingBottom:'20px',
                    backgroundColor: "lightblue",
                  }}
                >
                  <LiaMapMarkerSolid className="shipContainerIcon" />
                  <span className="containerTxt">To Final Destination</span>
                </Box>
                <Box className="divBottomLin"></Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              style={{ marginLeft: "15px", width: "100%", marginTop: "20px" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="start"
                style={{ marginBottom: "5px" }}
              >
                <span className="poSpan conFontClass">
                  <span className="underline">Ter</span><span>minal Firms</span>:
                </span>
                <span className="matSpan conFontClass">
                  <span className="underline">Out</span><span>age Date</span>:
                </span>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="start">
                <span className="poSpan valueTxtClass">1234567</span>
                <span className="matSpan valueTxtClass">03/24/2024</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions className="dialog-footer">
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContainerDirect;
