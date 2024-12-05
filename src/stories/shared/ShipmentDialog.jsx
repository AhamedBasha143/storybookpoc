import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Tabs,
  Tab,
  Button,
  Grow,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DialogActions from "@mui/material/DialogActions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

function ShipmentDialog({ show, handleClose }) {
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
      id='dialogHdBtnShip'
    >
      <DialogTitle className="dialog-header">
        Shipment Information
        <IconButton
          style={{ position: "absolute", right: 13, top: 15 }}
          onClick={handleCloseDialog}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <div style={{display:"flex",
          flexDirection:'column',
        }}>
          <Typography variant="subtitle1" style={{marginTop:"5px"}}>
            ONE TIME SHIP TO - DOMESTIC (non-t)
          </Typography>
          <Typography variant="h7" style={{marginBottom:"5px"}}>{"6502 SW 29th St"} <span className="shipDialogSeperator">|</span> {"73149"}</Typography>
          
        </div>
        {/* First Table for PO details */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                <TableCell>PO#</TableCell>
                <TableCell>Material</TableCell>
                <TableCell>SO#</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Qty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>4500191013</TableCell>
                <TableCell>48P8Z05565P4ZZ0YS2</TableCell>
                <TableCell>4261346</TableCell>
                <TableCell>90</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Tabs for High Level and Serial Details */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          style={{ margin: "20px 0" }}
        >
          <Tab label="High Level" />
          <Tab label="Serial Details" />
        </Tabs>

        {/* Conditional rendering based on selected tab */}
        {activeTab === 0 && (
          <>
            {/* Trailer Details Table */}
            <Typography variant="h6" gutterBottom>
              Trailer Details
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                    <TableCell>BOL</TableCell>
                    <TableCell>Delivery Ticket</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Latest Tracking ID</TableCell>
                    <TableCell>Latest Other Tracking ID</TableCell>
                    <TableCell>Shipment Number</TableCell>
                    <TableCell>Trailer</TableCell>
                    <TableCell>Created Date</TableCell>
                    <TableCell>Ship Date</TableCell>
                    <TableCell>Qty</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>MXB1649441</TableCell>
                    <TableCell>21782233</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>0001649441</TableCell>
                    <TableCell>18062</TableCell>
                    <TableCell>09/28/2023</TableCell>
                    <TableCell>09/09/2024</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {activeTab === 1 && (
          <>
            {/* Table for Serial Details (as in the uploaded image) */}
            <Typography variant="h6" gutterBottom>
              Delivery Ticket
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                    <TableCell>Item</TableCell>
                    <TableCell>Ship Date</TableCell>
                    <TableCell>Serials</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>09/19/2024</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        {/* Provider Details Table */}
        <Typography variant="h6" gutterBottom>
          Provider Details
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                <TableCell>BOL</TableCell>
                <TableCell>Vendor Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Mode Code</TableCell>
                <TableCell>SCAC</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>MXB1649441</TableCell>
                <TableCell>JIT TRANSPORT LLC</TableCell>
                <TableCell>956-267-4493</TableCell>
                <TableCell>TL-FLAT</TableCell>
                <TableCell>JITB</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Appointment Details Table */}
        <Typography variant="h6" gutterBottom>
          Appointment Details
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0f7fa" }}>
                <TableCell>BOL</TableCell>
                <TableCell>Appointment Date</TableCell>
                <TableCell>Appointment Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>MXB1649441</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>

      <DialogActions className="dialog-footer">
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ShipmentDialog;
