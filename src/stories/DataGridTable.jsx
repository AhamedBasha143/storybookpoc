import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import * as XLSX from "xlsx";
import CustomDialog from "./CustomDialog"; // Adjust the path to your CustomDialog component
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable"; // For table generation in PDF

const TableContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const TableButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3px;
  align-items: center;
`;

const ExcelContainer = styled.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const PDFContainer = styled.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin: 16px 0;
  width: 96%;
`;

const StyledInput = styled.input`
  width: 97%;
  padding: 16px 12px 8px;
  padding-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(0, -28px);
    font-size: 20px;
    color: #007bff;
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #999;
  background-color: white;
  padding: 0 4px;
  transition: 0.3s ease all;
  pointer-events: none;

  ${({ isFocused }) =>
    isFocused &&
    css`
      transform: translate(0, -26px);
      font-size: 18px;
      color: #007bff;
    `}
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #2b3e50;
  color: white;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #2b3e50;
  color: white;
  width: ${({ width }) => width || "auto"};
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  font-size: 17px;
  border: 1px solid lightgray;
  border-top: 0px;
  padding: 6px;
`;

const RowsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButton = styled.button`
  color: black;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:disabled {
    color: black;
    background-color: none;
  }

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const SelectRowsPerPage = styled.select`
  margin-left: 5px;
  padding: 5px;
`;

function DataGridTable({ columns, rows, onRowClick, ShowSearchBox, ShowXLSXDownloadBtn, ShowPDFDownloadBtn, filename }) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const currentItems = inputValue.length > 0 ? rows.filter((item) => item.Column_1.includes(inputValue)) : rows;

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  const totalPages = Math.ceil(currentItems.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const onClickXLSXDownload = () => {
    const headers = [
      { key: "Column_1", label: "Column 1" },
      { key: "Column_2", label: "Column 2" },
      { key: "Column_3", label: "Column 3" },
      { key: "Column_4", label: "Column 4" },
      { key: "Column_5", label: "Column 5" },
      { key: "Column_6", label: "" },
    ];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(currentItems, {
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
  };

  const onClickPDFDownload = () => {
    const doc = new jsPDF();
    const tableColumnHeaders = columns.map((col) => col.headerName);
    const tableRows = currentItems.map((row) =>
      columns.map((col) => row[col.field])
    );

    doc.autoTable({
      head: [tableColumnHeaders],
      body: tableRows,
    });

    doc.save(`${filename}.pdf`);
  };

  const displayedRows = currentItems.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <TableContainer>
      <TableButtonContainer>
        <InputContainer style={{ visibility: !ShowSearchBox ? "hidden" : "" }}>
          <StyledInput
            type="input"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(!!inputValue)}
            placeholder=""
          />
          <FloatingLabel isFocused={isFocused || inputValue}>Search</FloatingLabel>
        </InputContainer>
        <ExcelContainer style={{ visibility: !ShowXLSXDownloadBtn ? "hidden" : "" }} onClick={onClickXLSXDownload}>
          <RiFileExcel2Line />
        </ExcelContainer>
        <PDFContainer style={{ visibility: !ShowPDFDownloadBtn ? "hidden" : "" }} onClick={onClickPDFDownload}>
          <FaRegFilePdf />
        </PDFContainer>
      </TableButtonContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableHeader key={col.field} width={col.width}>
                {col.headerName}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {displayedRows.map((row) => (
            <TableRow key={row.id} onClick={() => onRowClick(row)}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  {col.field === "Column_3" ? (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRowClick(row);
                      }}
                    >
                      {row[col.field]}
                    </a>
                  ) : col.field === "Column_6" ? (
                    <button onClick={() => console.log("Button clicked!")}>Action</button>
                  ) : (
                    row[col.field]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
      <PaginationContainer>
        <RowsPerPageContainer>
          Rows per page:
          <SelectRowsPerPage value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </SelectRowsPerPage>
        </RowsPerPageContainer>
        <span>
          {currentPage} of {totalPages}
        </span>
        <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          <MdKeyboardArrowLeft />
        </PaginationButton>
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <MdKeyboardArrowRight />
        </PaginationButton>
      </PaginationContainer>

      {/* Dialog for row details */}
      {selectedRow && (
        <CustomDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <h2>Row Details</h2>
          <pre>{JSON.stringify(selectedRow, null, 2)}</pre>
        </CustomDialog>
      )}
    </TableContainer>
  );
}

export default DataGridTable;
