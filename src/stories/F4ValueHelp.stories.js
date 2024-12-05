import React from 'react';
import F4ValueHelp from './F4ValueHelp'; // Update the path to your component

export default {
  title: 'Components/F4ValueHelp',
  component: F4ValueHelp,
  tags: ['autodocs'],
};

// Template for the F4ValueHelp stories
const Template = (args) => <F4ValueHelp {...args} />;

// Story for default usage
export const Default = Template.bind({});
Default.args = {
  label: 'Select Items',
  id: 'itemSelect',
  data:'Customer',
  onSelect: (selectedItems) => console.log('Selected Items:', selectedItems),
  onChange: (e) => console.log('Input Changed:', e.target.value),
  disabled: false,
  value: '', // Initial input value
};

// Story for the disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select Items',
  id: 'itemSelectDisabled',
  data: [
    { label: 'Item 1', value: 'Value 1' },
    { label: 'Item 2', value: 'Value 2' },
    { label: 'Item 3', value: 'Value 3' },
  ],
  onSelect: (selectedItems) => console.log('Selected Items:', selectedItems),
  onChange: (e) => console.log('Input Changed:', e.target.value),
  disabled: true, // Disabled state
  value: '', // Initial input value
};
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState, useEffect, useContext } from "react";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grow from "@mui/material/Grow";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import LoadingSpinner from "./LoadingSpinner";
import './F4ValueHelp.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const F4ValueHelp = ({
  label,
  id,
  data,
  onSelect,
  onChange,
  disabled,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [tempSelectedItems, setTempSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [f4Hidden, setF4Hidden] = useState(false);
  const [filterDataSet, setFilterDataSet] = useState([data]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const inputValues = inputValue.split(",").map((val) => val.trim());
    const matchedItems = filterDataSet.filter((item) =>
      inputValues.includes(item.name)
    );
    const uniqueMatchedItems = [...new Set(matchedItems)];
    setTempSelectedItems(uniqueMatchedItems);
    if (
      id === "po" ||
      id === "so" ||
      id === "soi" ||
      id === "soCO" ||
      id === "poCO"
    ) {
      setF4Hidden(true);
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(selectedItems.map((item) => item.label).join(", "));
  }, [selectedItems]);

  const fetchFilterData = async () => {
    setOpen(true);
    setLoadingSpinner(true);
    const itemData = {
      Customer: [      {
          label: "Test",
          value: "Test",
          selected: false,
        },
      ],
    };
    // Fetch data
    const result = itemData[data];
    setFilterDataSet(result);

    // After fetching data, ensure pasted items are selected
    const inputValues = inputValue.split(",").map((val) => val.trim());

    // Match the input (pasted) values with fetched data
    const matchedItems = result.filter((item) =>
      inputValues.includes(item.label)
    );

    // Update tempSelectedItems with matched fetched items
    setTempSelectedItems((prevItems) => {
      const uniqueMatchedItems = [...new Set([...prevItems, ...matchedItems])];
      return uniqueMatchedItems;
    });
    setLoadingSpinner(false);
  };

  const filteredData = filterDataSet.filter((item) => {
    const inputValues = filter
      .split(",")
      .map((val) => val.trim().toLowerCase());
    const itemLabel = item.label ? item.label.toLowerCase() : "";
    const itemValue = item.value ? item.value.toLowerCase() : "";

    // Check if any input value matches the item's label or value
    return inputValues.some(
      (input) => itemLabel.includes(input) || itemValue.includes(input)
    );
  });

  const handleSelect = (item) => {
    const isSelected = tempSelectedItems.some((i) => i.label === item.label);
    const newTempSelectedItems = isSelected
      ? tempSelectedItems.filter((i) => i.label !== item.label)
      : [...tempSelectedItems, item];
    setTempSelectedItems(newTempSelectedItems);
  };

  const handleDelete = (item) => {
    const newTempSelectedItems = tempSelectedItems.filter(
      (i) => i.label !== item.label
    );
    setTempSelectedItems(newTempSelectedItems);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text");
    const pastedItems = pasteData
      .split(/[\n,]+|,\s*/)
      .map((item) => item.trim())
      .filter((item) => item);
    const uniquePastedItems = [...new Set(pastedItems)];
    const csvString = uniquePastedItems.join(", ");
    setInputValue(csvString);
  };

  const handleSelectAll = () => {
    if (tempSelectedItems.length === filteredData.length) {
      setTempSelectedItems([]);
    } else {
      setTempSelectedItems(filteredData);
    }
  };

  const handleApply = () => {
    setSelectedItems(tempSelectedItems);
    onSelect(tempSelectedItems);
    setOpen(false);
  };
  const handleCloseDialog = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    handleCancel();
  };
  const handleCancel = () => {
    setTempSelectedItems([]);
    setSelectedItems([]);
    onSelect([]);
    setInputValue("");
    setOpen(false);
  };
  const handleClose = () => {
    setTempSelectedItems([]);
    setSelectedItems([]);
    onSelect([]);
    setOpen(false);
  };
  //setInputValue
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };
  return (
    <>
      <div className={disabled ? "value-help setDisabled" : "value-help"}>
        <LoadingSpinner loading={loadingSpinner} />
        <input
          id={id}
          type="text"
          placeholder={label}
          value={inputValue}
          onChange={(e) => onChangeInput(e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={disabled ? "setDisabled" : ""}
        />
        <span
          className={disabled ? "setDisabled" : "line-seperator"}
          hidden={f4Hidden}
        ></span>
        <button onClick={fetchFilterData} disabled={disabled} hidden={f4Hidden}>
          <RiCheckboxMultipleBlankLine />
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        disableEscapeKeyDown
        id="dialogHdBtnF4"
        sx={{
          "& .MuiDialog-paper": {
            width: "100%  !important",
            height:'100vh'
          },
        }}
      >
        <DialogTitle className="dialog-header F4Header">
          <span>{label}</span>
          <IconButton
            style={{ position: "absolute", right: 13, top: 15 }} // Position the close icon
            onClick={handleClose}
          >
            <CloseOutlinedIcon />
          </IconButton>
          {/* <button onClick={handleCloseDialog} className="close-button_f4">
            <CloseOutlinedIcon />
          </button> */}
        </DialogTitle>
        <DialogContent className="F4Content">
          <TextField
            label="Search"
            variant="outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "20%",
                marginTop: "10px",
                marginBottom: "10px",

                "& fieldset": {
                  height: "100%",
                },
              },
              "& .MuiInputLabel-root": {
                marginTop: "10px",
                marginBottom: "10px",
              },
            }}
          />
          <div className="list-header">
            <div className="checkbox-container">
              <Checkbox
                checked={tempSelectedItems.length === filteredData.length}
                onChange={handleSelectAll}
              />
            </div>
            <div className="name-container">
              {label.includes("SKU")
                ? label.replace(/SKU/g, "Material").replace("Select ", "")
                : label.replace("Select ", "")}
            </div>
            <div className="description-container description_padding">
              Description
            </div>
          </div>
          <ul className="F4ListNoPadding">
            {filteredData.map((item, index) => (
              <li key={index} className="list-item">
                <div className="checkbox-container">
                  <Checkbox
                    checked={tempSelectedItems.some(
                      (i) => i.label === item.label
                    )}
                    onChange={() => handleSelect(item)}
                  />
                </div>
                <div className="name-container">{item.label}</div>
                <div className="description-container">{item.value}</div>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Button onClick={handleApply}>Apply</Button>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default F4ValueHelp;
`
      ,
    },
  },
};
