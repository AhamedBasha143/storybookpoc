import React, { useState } from "react";
import * as XLSX from "xlsx";
import styled from "styled-components";
import { IconButton, CircularProgress } from "@mui/material";
import { RiFileExcel2Line } from "react-icons/ri";
import {
  formatDate,
  formatQuanity,
  formatOrderQuantity,
  toOrderStatus,
  formatPrice,
  toAcknowledged,
  toWholeNumberShipped,
  toDCText,
} from "./shared/formatter";
import { generateHeader } from "./shared/ExcelHeader";
import SkuSearchViewHint from "./shared/SkuSearchViewHint";
import { IoInformationOutline } from "react-icons/io5";
import './F4ValueHelp.css';



const ExcelDownloadButton = ({
  data,
  headerName,
  filename,
  visibility,
  buttons,
}) => {

  
    const [isDownloading, setIsDownloading] = useState(false);
   
  
  const handleDownload = async () => {
    
    //show sku search veiw hint
  
  
    // Map the data to match the headers
    const headers = generateHeader(headerName);
    const dataToExport = data.map((item) => {
      return headers.reduce((obj, header) => {
        if (header.label.includes("Quantity") || header.label.includes("Qty")) {
          obj[header.key] = formatQuanity(item[header.key]);
        } else if (
          header.label.includes("Order Date") ||
          header.label === "Latest CPSD" ||
          header.label === "CRSD Header" ||
          header.label === "CRSD" ||
          header.label === "Latest Delivery Ticket" ||
          header.label.includes("Date")
        ) {
          obj[header.key] = formatDate(item[header.key]);
        } else if (header.label.includes("Value")) {
          obj[header.key] = formatPrice(item[header.key]);
        } else if (header.label === "Ackknowledged") {
          obj.Ackknowledged = toAcknowledged(
            item.A006NZKS3HHO27WANNHAS48HVT,
            item.A006NZKS3HHO27WANNHAS47SLL
          );
        } else if (
          header.label === "Received" ||
          header.label === "Firmed" ||
          header.label === "In Production" ||
          header.label === "In Transit" ||
          header.label === "In Inventory" ||
          header.label === "DC Load Cycle" ||
          header.label === "Ready to Ship"
        ) {
          const keys = header.key.split(",");
          obj[header.label] = toDCText(
            item[keys[0]],
            item[keys[1]],
            item[keys[2]]
          );
        } else if (header.label === "Shipped") {
          obj[header.key] = toWholeNumberShipped(item[header.key]);
        } else {
          obj[header.key] = item[header.key];
        }
        return obj;
      }, {});
    });

    // Create a new workbook and add a new sheet with the data
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataToExport, {
      header: headers.map((header) => header.key),
      skipHeader: false,
    });

    // Set custom headers
    for (let i = 0; i < headers.length; i++) {
      const cellRef = XLSX.utils.encode_cell({ c: i, r: 0 });
      worksheet[cellRef].v = headers[i].label;
    }

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, filename);

    // Write the workbook and trigger the download
    XLSX.writeFile(workbook, `${filename}.xlsx`);

    setIsDownloading(false); // Reset the download indicator
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          backgroundColor: "whitesmoke",
          padding: 10,
        }}
      >
        <IconButton
          onClick={handleDownload}
          disabled={isDownloading}
          id={headerName}
          className={visibility}
          style={{ color: "white !important" }}
        >
          {isDownloading ? (
            <CircularProgress size={24} />
          ) : (
            <RiFileExcel2Line style={{ color: "white !important" }} />
          )}
        </IconButton>
      </div>
    </>
  );
};

export default ExcelDownloadButton;
