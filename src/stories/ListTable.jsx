import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import {
  toWholeNumberShipped,
  toShipmentDateText,
  formatStatusShipping,
} from "./shared/formatter";

import "./F4ValueHelp.css";

function ListTable({ data }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5); // Items per page

  useEffect(() => {
    // Set the items to be displayed based on visibleItems
    setCurrentItems(data.slice(0, visibleItems));
  }, [data, visibleItems]);

  const getShipmentDetails = (index, item) => {
    console.log("item clicked", item);
    setSelectedCardIndex(index);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5); // Load 20 more items
  };

  return (
    <div style={{ maxHeight: "700px", overflowY: "auto" ,overflowX:'hidden'}}>
      {currentItems && currentItems.length > 0 ? (
        currentItems.map((item, index) => (
          <Card
            key={index + "id"}
            onClick={() => {
              getShipmentDetails(index, item);
            }}
            sx={{
              borderBottom: "1px solid darkgray",
              cursor: "pointer",
              boxShadow: "0px !important",
              backgroundColor: selectedCardIndex === index ? "lightgray" : "#fff",
            }}
          >
            <CardContent style={{ padding: 15 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Typography variant="h6">PO {item.A4ZSDL_CP17BSTNK}</Typography>
                <Typography variant="h6">
                  {toWholeNumberShipped(item.A006NZKS3HHO27WAOKGXBLYOFO)}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Typography variant="body2">Material: {item.ZMATERIAL}</Typography>
                <Typography variant="body2">
                  {toShipmentDateText(
                    item.A4ZSDL_CP17DEL_STS_NEW,
                    item.A0PLD_GI_DTE_T,
                    item.ZAC_GI_DT_T
                  )}
                </Typography>
              </div>
              <Typography variant="body2" style={{ marginBottom: 5 }}>
                Tracking ID: {item.A4ZSDL_CP17TNDR_TRKID}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: 5 }}>
                Shipment Status: {formatStatusShipping(item.A4ZSDL_CP17DEL_STS_NEW_T)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body2">No data available</Typography>
      )}
      {data && visibleItems < data.length && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
            width: "100%",
          }}
        >
          <div
            onClick={handleLoadMore}
            style={{
              padding: "5px 15px",
              backgroundColor: "white",
              color: "#346187",
              borderRadius: "4px",
              cursor: "pointer",
              textAlign: "center",
              width: "100%",
              fontWeight: "bold",
            }}
          >
            More
          </div>
          <Typography
            variant="body2"
            style={{ marginTop: 5, color: "#346187", fontWeight: "500" }}
          >
            [{visibleItems}/{data.length}]
          </Typography>
        </div>
      )}
    </div>
  );
}

export default ListTable;
