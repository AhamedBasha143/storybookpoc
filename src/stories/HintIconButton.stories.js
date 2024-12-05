import React from 'react';
import HintIconButton from './HintIconButton'; // Adjust this path


export default {
  title: 'Components/HintIconButton',
  component: HintIconButton,
  tags: ['autodocs'],
};

const Template = (args) => <HintIconButton />;

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from "react";
import SkuSearchViewHint from "./shared/SkuSearchViewHint";
import { IoInformationOutline } from "react-icons/io5";
import { IconButton } from "@mui/material";
import './F4ValueHelp.css';



const HintIconButton = () => {

  const [showHint, setShowHint] = useState(false);
   
    const handleShowHint = () => {
      setShowHint(true);
    };
    const handleCloseHint = () => {
      setShowHint(false);
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
        <IconButton onClick={handleShowHint} className="itemInfoBtn">
          <IoInformationOutline />
        </IconButton>
        {showHint && (
          <SkuSearchViewHint
            show={handleShowHint}
            handleClose={handleCloseHint}
          />
        )}
      </div>
    </>
  );
};

export default HintIconButton;
`
      ,
    },
  },
};

