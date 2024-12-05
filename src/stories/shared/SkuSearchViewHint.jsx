import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import Grow from "@mui/material/Grow";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
  });

const SKUSeachViewHint = ({ show, handleClose }) => {
    const handleCloseDialog = (event, reason) => {
        if (reason && reason === "backdropClick") 
            return;
        handleClose();
    }
    
      if (!show) {
        return null;
      }
  // Data for the table
  const rows = [
    {
      externalTollgate: 'Order Confirmed',
      definition: 'Once order is Received and it enters SAP',
      internalTollgate: 'Received',
      start: 'Once Order is received, Tollgate is marked as complete',
      end: 'Once Order is received, Tollgate is marked as complete',
      exceptions: 'No Exception',
    },
    {
        externalTollgate: '',
        definition: '',
        internalTollgate: 'Acknowledged',
        start: 'Once Order is received, Tollgate is marked as In Progress',
        end: 'Once order is Acknowledged to customer or Traget date has been defined then Toll gate is marked as Completed',
        exceptions: 'No Exception',
      },
      {
        externalTollgate: '',
        definition: '',
        internalTollgate: 'Firmed',
        start: 'Once order is Acknowledged to customer or Traget date has been defined then Toll gate is marked as In Progress',
        end: 'Once Order is Firmed, Order Start Dtae is defined then tollgate is marked as complete',
        exceptions: 'No Exception',
      },
      {
        externalTollgate: 'Production',
        definition: 'Units currently in Production',
        internalTollgate: 'In production',
        start: '',
        end: 'Production qunatity is equivalent to order qty,Tollgate is marked as complete',
        exceptions: 'Not Availble for MTS Order',
      },
      {
        externalTollgate: '',
        definition: '',
        internalTollgate: 'In Transit',
        start: 'Order has been transferred to Warehouse',
        end: 'When complete ordered quantity is received in Warehouse',
        exceptions: 'Not Availble for MTS Order & third Party',
      },
      {
        externalTollgate: 'Warehouse',
        definition: 'Availible in DC and ready to load into truck',
        internalTollgate: 'In Inventory',
        start: 'Order has been transferred to Warehouse',
        end: 'When delivery ticket has been created for complete order then this tollgate is marked as complete',
        exceptions: 'Not Availble for MTS Order & third Party(drop ship)',
      },
      {
        externalTollgate: '',
        definition: '',
        internalTollgate: 'DC Load Cycle',
        start: 'When delivery ticket has been created for complete order then this tollgate is marked as In Progress',
        end: 'When Shipment Status is defined as completed,then tollgate is marked as complete',
        exceptions: 'Not Availble for third party(drop ship)',
      },
      {
        externalTollgate: 'Ready To Ship',
        definition: 'Availible in DC and ready to load into truck',
        internalTollgate: 'Ready To Ship ',
        start: 'When shipment status is defined as completed,tollgates is marked In Progress',
        end: 'When total order quantity has been issued',
        exceptions: 'Not Availble for third party(drop ship)',
      },
      {
        externalTollgate: 'Shipped',
        definition: 'Once the units are physically shipped out of DC',
        internalTollgate: 'Out For Delivery ',
        start: 'Qty issues or Qty billed',
        end: 'NA',
        exceptions: 'For third parties billed quantity is considered',
      },
    // Add more rows as necessary
  ];

  return (
    <>
      

      {/* Dialog that opens and closes based on the state */}
      <Dialog open={show} onClose={handleCloseDialog}
        TransitionComponent={Transition}
        id="dialogHdBtnSKUHint"
        className='dialogWidht'
        disableEscapeKeyDown>
        <DialogTitle className="dialog-header">Tollgate Information
        <IconButton
          style={{ position: "absolute", right: 13, top: 15 }} // Position the close icon
          onClick={handleCloseDialog}
        >
            <CloseOutlinedIcon />
            </IconButton>

        </DialogTitle>
        <DialogContent>
          <TableContainer style={{marginTop:"5px"}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>External Tollgate</TableCell>
                  <TableCell>Definition</TableCell>
                  <TableCell>Internal Tollgate</TableCell>
                  <TableCell>Start</TableCell>
                  <TableCell>End</TableCell>
                  <TableCell>Exceptions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{
                    color: "black",
                    fontWeight:"bold",
                    borderBottom:"1px solid darkgray"
                  }}>{row.externalTollgate}</TableCell>
                    <TableCell>{row.definition}</TableCell>
                    <TableCell sx={{
                    color: "black",
                    fontWeight:"bold",
                    borderBottom:"1px solid darkgray"
                  }}>{row.internalTollgate}</TableCell>
                    <TableCell>{row.start}</TableCell>
                    <TableCell>{row.end}</TableCell>
                    <TableCell>{row.exceptions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SKUSeachViewHint;
