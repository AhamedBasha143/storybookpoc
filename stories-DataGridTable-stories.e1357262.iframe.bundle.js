"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[3125],{"./src/stories/DataGridTable.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataGridTable_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),xlsx=__webpack_require__("./node_modules/xlsx/xlsx.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,DialogContainer=styled_components_browser_esm.Ay.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  position: relative;
`,DialogHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,CloseButton=styled_components_browser_esm.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
`,DialogFooter=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,FooterButton=styled_components_browser_esm.Ay.button`
  margin-left: 10px;
`,CustomDialog=_ref=>{let{open,onClose,onOk}=_ref;return open?(0,jsx_runtime.jsx)(DialogOverlay,{children:(0,jsx_runtime.jsxs)(DialogContainer,{children:[(0,jsx_runtime.jsxs)(DialogHeader,{children:[(0,jsx_runtime.jsx)("h2",{children:"Dialog Header"}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:"X"})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("p",{children:"Content of the dialog goes here."})}),(0,jsx_runtime.jsxs)(DialogFooter,{children:[(0,jsx_runtime.jsx)(FooterButton,{onClick:onOk,children:"OK"}),(0,jsx_runtime.jsx)(FooterButton,{onClick:onClose,children:"Cancel"})]})]})}):null},stories_CustomDialog=CustomDialog;CustomDialog.__docgenInfo={description:"",methods:[],displayName:"CustomDialog"};var ri=__webpack_require__("./node_modules/react-icons/ri/index.mjs"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),jspdf_es_min=__webpack_require__("./node_modules/jspdf/dist/jspdf.es.min.js");__webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");const TableContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  margin: 20px auto;
`,TableButtonContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3px;
  align-items: center;
`,ExcelContainer=styled_components_browser_esm.Ay.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`,PDFContainer=styled_components_browser_esm.Ay.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`,InputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  margin: 16px 0;
  width: 96%;
`,StyledInput=styled_components_browser_esm.Ay.input`
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
`,FloatingLabel=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #999;
  background-color: white;
  padding: 0 4px;
  transition: 0.3s ease all;
  pointer-events: none;

  ${_ref=>{let{isFocused}=_ref;return isFocused&&styled_components_browser_esm.AH`
      transform: translate(0, -26px);
      font-size: 18px;
      color: #007bff;
    `}}
`,StyledTable=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,TableHead=styled_components_browser_esm.Ay.thead`
  background-color: #2b3e50;
  color: white;
`,TableHeader=styled_components_browser_esm.Ay.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #2b3e50;
  color: white;
  width: ${_ref2=>{let{width}=_ref2;return width||"auto"}};
  font-weight: bold;
`,TableRow=styled_components_browser_esm.Ay.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`,TableCell=styled_components_browser_esm.Ay.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`,PaginationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  font-size: 17px;
  border: 1px solid lightgray;
  border-top: 0px;
  padding: 6px;
`,RowsPerPageContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,PaginationButton=styled_components_browser_esm.Ay.button`
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
`,SelectRowsPerPage=styled_components_browser_esm.Ay.select`
  margin-left: 5px;
  padding: 5px;
`;function DataGridTable(_ref3){let{columns,rows,onRowClick,ShowSearchBox,ShowXLSXDownloadBtn,ShowPDFDownloadBtn,filename}=_ref3;const[inputValue,setInputValue]=(0,react.useState)(""),[isFocused,setIsFocused]=(0,react.useState)(!1),[currentPage,setCurrentPage]=(0,react.useState)(1),[rowsPerPage,setRowsPerPage]=(0,react.useState)(5),[dialogOpen,setDialogOpen]=(0,react.useState)(!1),[selectedRow,setSelectedRow]=(0,react.useState)(null),currentItems=inputValue.length>0?rows.filter((item=>item.Column_1.includes(inputValue))):rows,totalPages=Math.ceil(currentItems.length/rowsPerPage),handlePageChange=newPage=>{newPage>=1&&newPage<=totalPages&&setCurrentPage(newPage)},displayedRows=currentItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage);return(0,jsx_runtime.jsxs)(TableContainer,{children:[(0,jsx_runtime.jsxs)(TableButtonContainer,{children:[(0,jsx_runtime.jsxs)(InputContainer,{style:{visibility:ShowSearchBox?"":"hidden"},children:[(0,jsx_runtime.jsx)(StyledInput,{type:"input",value:inputValue,onChange:event=>{setInputValue(event.target.value)},onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!!inputValue),placeholder:""}),(0,jsx_runtime.jsx)(FloatingLabel,{isFocused:isFocused||inputValue,children:"Search"})]}),(0,jsx_runtime.jsx)(ExcelContainer,{style:{visibility:ShowXLSXDownloadBtn?"":"hidden"},onClick:()=>{const headers=[{key:"Column_1",label:"Column 1"},{key:"Column_2",label:"Column 2"},{key:"Column_3",label:"Column 3"},{key:"Column_4",label:"Column 4"},{key:"Column_5",label:"Column 5"},{key:"Column_6",label:""}],workbook=xlsx.Wp.book_new(),worksheet=xlsx.Wp.json_to_sheet(currentItems,{header:headers.map((header=>header.key)),skipHeader:!1});for(let i=0;i<headers.length;i++){worksheet[xlsx.Wp.encode_cell({c:i,r:0})].v=headers[i].label}xlsx.Wp.book_append_sheet(workbook,worksheet,filename),xlsx._h(workbook,`${filename}.xlsx`)},children:(0,jsx_runtime.jsx)(ri.eLh,{})}),(0,jsx_runtime.jsx)(PDFContainer,{style:{visibility:ShowPDFDownloadBtn?"":"hidden"},onClick:()=>{const doc=new jspdf_es_min.default,tableColumnHeaders=columns.map((col=>col.headerName)),tableRows=currentItems.map((row=>columns.map((col=>row[col.field]))));doc.autoTable({head:[tableColumnHeaders],body:tableRows}),doc.save(`${filename}.pdf`)},children:(0,jsx_runtime.jsx)(fa.uNb,{})})]}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)(TableHead,{children:(0,jsx_runtime.jsx)(TableRow,{children:columns.map((col=>(0,jsx_runtime.jsx)(TableHeader,{width:col.width,children:col.headerName},col.field)))})}),(0,jsx_runtime.jsx)("tbody",{children:displayedRows.map((row=>(0,jsx_runtime.jsx)(TableRow,{onClick:()=>onRowClick(row),children:columns.map((col=>(0,jsx_runtime.jsx)(TableCell,{children:"Column_3"===col.field?(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),(row=>{setSelectedRow(row),setDialogOpen(!0)})(row)},children:row[col.field]}):"Column_6"===col.field?(0,jsx_runtime.jsx)("button",{onClick:()=>console.log("Button clicked!"),children:"Action"}):row[col.field]},col.field)))},row.id)))})]}),(0,jsx_runtime.jsxs)(PaginationContainer,{children:[(0,jsx_runtime.jsxs)(RowsPerPageContainer,{children:["Rows per page:",(0,jsx_runtime.jsxs)(SelectRowsPerPage,{value:rowsPerPage,onChange:e=>setRowsPerPage(Number(e.target.value)),children:[(0,jsx_runtime.jsx)("option",{value:5,children:"5"}),(0,jsx_runtime.jsx)("option",{value:10,children:"10"}),(0,jsx_runtime.jsx)("option",{value:15,children:"15"})]})]}),(0,jsx_runtime.jsxs)("span",{children:[currentPage," of ",totalPages]}),(0,jsx_runtime.jsx)(PaginationButton,{onClick:()=>handlePageChange(currentPage-1),disabled:1===currentPage,children:(0,jsx_runtime.jsx)(md.l7J,{})}),(0,jsx_runtime.jsx)(PaginationButton,{onClick:()=>handlePageChange(currentPage+1),disabled:currentPage===totalPages,children:(0,jsx_runtime.jsx)(md.U7T,{})})]}),selectedRow&&(0,jsx_runtime.jsxs)(stories_CustomDialog,{open:dialogOpen,onClose:()=>setDialogOpen(!1),children:[(0,jsx_runtime.jsx)("h2",{children:"Row Details"}),(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(selectedRow,null,2)})]})]})}const stories_DataGridTable=DataGridTable;DataGridTable.__docgenInfo={description:"",methods:[],displayName:"DataGridTable"};const DataGridTable_stories={title:"Components/Table Component",component:stories_DataGridTable,tags:["autodocs"],argTypes:{ShowSearchBox:{control:"boolean"},ShowPDFDownloadBtn:{control:"boolean"},ShowXLSXDownloadBtn:{control:"boolean"},filename:{control:"text"}}},Default=(args=>(0,jsx_runtime.jsx)(stories_DataGridTable,{...args})).bind({});Default.args={columns:[{field:"Column_1",headerName:"Column 1",width:"150px"},{field:"Column_2",headerName:"Column 2",width:"300px"},{field:"Column_3",headerName:"Column 3",width:"200px"},{field:"Column_4",headerName:"Column 4",width:"200px"},{field:"Column_5",headerName:"Column 5",width:"200px"},{field:"Column_6",headerName:"",width:"200px"}],rows:[{id:"1",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"2",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"3",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"4",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"5",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"6",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"8",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"}],onRowClick:row=>console.log("Row clicked: ",row),ShowSearchBox:!0,ShowXLSXDownloadBtn:!0,ShowPDFDownloadBtn:!0,filename:"sample"},Default.parameters={docs:{source:{code:'import React, { useState } from "react";\nimport styled, { css } from "styled-components";\nimport { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";\nimport * as XLSX from "xlsx";\nimport CustomDialog from "./CustomDialog"; // Adjust the path to your CustomDialog component\nimport { RiFileExcel2Line } from "react-icons/ri";\nimport { FaRegFilePdf } from "react-icons/fa";\nimport jsPDF from "jspdf";\nimport "jspdf-autotable"; // For table generation in PDF\n\nconst TableContainer = styled.div\'\n  width: 100%;\n  margin: 20px auto;\n\';\n\nconst TableButtonContainer = styled.div\'\n  width: 100%;\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 3px;\n  align-items: center;\n\';\n\nconst ExcelContainer = styled.div\'\n  font-size: 28px;\n  color: black;\n  &:hover {\n    color: blue;\n    cursor: pointer;\n  }\n\';\n\nconst PDFContainer = styled.div\'\n  font-size: 28px;\n  color: black;\n  &:hover {\n    color: blue;\n    cursor: pointer;\n  }\n\';\n\nconst InputContainer = styled.div\'\n  position: relative;\n  margin: 16px 0;\n  width: 96%;\n\';\n\nconst StyledInput = styled.input\'\n  width: 97%;\n  padding: 16px 12px 8px;\n  padding-bottom: 16px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s;\n\n  &:focus {\n    border-color: #007bff;\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    transform: translate(0, -28px);\n    font-size: 20px;\n    color: #007bff;\n  }\n\';\n\nconst FloatingLabel = styled.label\'\n  position: absolute;\n  left: 12px;\n  top: 16px;\n  font-size: 16px;\n  color: #999;\n  background-color: white;\n  padding: 0 4px;\n  transition: 0.3s ease all;\n  pointer-events: none;\n\n  {({ isFocused }) =>\n    isFocused &&\n    css\'\n      transform: translate(0, -26px);\n      font-size: 18px;\n      color: #007bff;\n    \'}\n\'\';\n\nconst StyledTable = styled.table\'\n  width: 100%;\n  border-collapse: collapse;\n\';\n\nconst TableHead = styled.thead\'\n  background-color: #2b3e50;\n  color: white;\n\';\n\nconst TableHeader = styled.th\'\n  padding: 10px;\n  border: 1px solid #ddd;\n  text-align: left;\n  background-color: #2b3e50;\n  color: white;\n  width: {({ width }) => width || "auto"};\n  font-weight: bold;\n\';\n\nconst TableRow = styled.tr\'\n  &:hover {\n    background-color: #f1f1f1;\n  }\n\';\n\nconst TableCell = styled.td\'\n  padding: 10px;\n  border: 1px solid #ddd;\n  text-align: left;\n\';\n\nconst PaginationContainer = styled.div\'\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 1rem;\n  font-size: 17px;\n  border: 1px solid lightgray;\n  border-top: 0px;\n  padding: 6px;\n\';\n\nconst RowsPerPageContainer = styled.div\'\n  display: flex;\n  align-items: center;\n\';\n\nconst PaginationButton = styled.button\'\n  color: black;\n  font-size: 20px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n\n  &:disabled {\n    color: black;\n    background-color: none;\n  }\n\n  &:hover {\n    background-color: #007bff;\n    color: white;\n  }\n\';\n\nconst SelectRowsPerPage = styled.select\'\n  margin-left: 5px;\n  padding: 5px;\n\';\n\nfunction DataGridTable({ columns, rows, onRowClick, ShowSearchBox, ShowXLSXDownloadBtn, ShowPDFDownloadBtn, filename }) {\n  const [inputValue, setInputValue] = useState("");\n  const [isFocused, setIsFocused] = useState(false);\n\n  const [currentPage, setCurrentPage] = useState(1);\n  const [rowsPerPage, setRowsPerPage] = useState(5);\n  const [dialogOpen, setDialogOpen] = useState(false);\n  const [selectedRow, setSelectedRow] = useState(null);\n\n  const handleInputChange = (event) => {\n    setInputValue(event.target.value);\n  };\n\n  const currentItems = inputValue.length > 0 ? rows.filter((item) => item.Column_1.includes(inputValue)) : rows;\n\n  const handleRowClick = (row) => {\n    setSelectedRow(row);\n    setDialogOpen(true);\n  };\n\n  const totalPages = Math.ceil(currentItems.length / rowsPerPage);\n\n  const handlePageChange = (newPage) => {\n    if (newPage >= 1 && newPage <= totalPages) {\n      setCurrentPage(newPage);\n    }\n  };\n\n  const onClickXLSXDownload = () => {\n    const headers = [\n      { key: "Column_1", label: "Column 1" },\n      { key: "Column_2", label: "Column 2" },\n      { key: "Column_3", label: "Column 3" },\n      { key: "Column_4", label: "Column 4" },\n      { key: "Column_5", label: "Column 5" },\n      { key: "Column_6", label: "" },\n    ];\n    const workbook = XLSX.utils.book_new();\n    const worksheet = XLSX.utils.json_to_sheet(currentItems, {\n      header: headers.map((header) => header.key),\n      skipHeader: false,\n    });\n\n    // Set custom headers\n    for (let i = 0; i < headers.length; i++) {\n      const cellRef = XLSX.utils.encode_cell({ c: i, r: 0 });\n      worksheet[cellRef].v = headers[i].label;\n    }\n\n    // Add the worksheet to the workbook\n    XLSX.utils.book_append_sheet(workbook, worksheet, filename);\n\n    // Write the workbook and trigger the download\n    XLSX.writeFile(workbook, \'{filename}.xlsx\');\n  };\n\n  const onClickPDFDownload = () => {\n    const doc = new jsPDF();\n    const tableColumnHeaders = columns.map((col) => col.headerName);\n    const tableRows = currentItems.map((row) =>\n      columns.map((col) => row[col.field])\n    );\n\n    doc.autoTable({\n      head: [tableColumnHeaders],\n      body: tableRows,\n    });\n\n    doc.save(\'{filename}.pdf\');\n  };\n\n  const displayedRows = currentItems.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);\n\n  return (\n    <TableContainer>\n      <TableButtonContainer>\n        <InputContainer style={{ visibility: !ShowSearchBox ? "hidden" : "" }}>\n          <StyledInput\n            type="input"\n            value={inputValue}\n            onChange={handleInputChange}\n            onFocus={() => setIsFocused(true)}\n            onBlur={() => setIsFocused(!!inputValue)}\n            placeholder=""\n          />\n          <FloatingLabel isFocused={isFocused || inputValue}>Search</FloatingLabel>\n        </InputContainer>\n        <ExcelContainer style={{ visibility: !ShowXLSXDownloadBtn ? "hidden" : "" }} onClick={onClickXLSXDownload}>\n          <RiFileExcel2Line />\n        </ExcelContainer>\n        <PDFContainer style={{ visibility: !ShowPDFDownloadBtn ? "hidden" : "" }} onClick={onClickPDFDownload}>\n          <FaRegFilePdf />\n        </PDFContainer>\n      </TableButtonContainer>\n      <StyledTable>\n        <TableHead>\n          <TableRow>\n            {columns.map((col) => (\n              <TableHeader key={col.field} width={col.width}>\n                {col.headerName}\n              </TableHeader>\n            ))}\n          </TableRow>\n        </TableHead>\n        <tbody>\n          {displayedRows.map((row) => (\n            <TableRow key={row.id} onClick={() => onRowClick(row)}>\n              {columns.map((col) => (\n                <TableCell key={col.field}>\n                  {col.field === "Column_3" ? (\n                    <a\n                      href="#"\n                      onClick={(e) => {\n                        e.preventDefault();\n                        handleRowClick(row);\n                      }}\n                    >\n                      {row[col.field]}\n                    </a>\n                  ) : col.field === "Column_6" ? (\n                    <button onClick={() => console.log("Button clicked!")}>Action</button>\n                  ) : (\n                    row[col.field]\n                  )}\n                </TableCell>\n              ))}\n            </TableRow>\n          ))}\n        </tbody>\n      </StyledTable>\n      <PaginationContainer>\n        <RowsPerPageContainer>\n          Rows per page:\n          <SelectRowsPerPage value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>\n            <option value={5}>5</option>\n            <option value={10}>10</option>\n            <option value={15}>15</option>\n          </SelectRowsPerPage>\n        </RowsPerPageContainer>\n        <span>\n          {currentPage} of {totalPages}\n        </span>\n        <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>\n          <MdKeyboardArrowLeft />\n        </PaginationButton>\n        <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>\n          <MdKeyboardArrowRight />\n        </PaginationButton>\n      </PaginationContainer>\n\n      {/* Dialog for row details */}\n      {selectedRow && (\n        <CustomDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>\n          <h2>Row Details</h2>\n          <pre>{JSON.stringify(selectedRow, null, 2)}</pre>\n        </CustomDialog>\n      )}\n    </TableContainer>\n  );\n}\n\nexport default DataGridTable;\n'}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <DataGridTable {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-DataGridTable-stories.e1357262.iframe.bundle.js.map