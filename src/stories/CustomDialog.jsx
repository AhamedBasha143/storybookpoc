import React from "react";
import styled from "styled-components";

const DialogOverlay = styled.div`
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
`;

const DialogContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  position: relative;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
`;

const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const FooterButton = styled.button`
  margin-left: 10px;
`;

const CustomDialog = ({ open, onClose, onOk }) => {
  if (!open) return null;

  return (
    <DialogOverlay>
      <DialogContainer>
        <DialogHeader>
          <h2>Dialog Header</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </DialogHeader>
        <div>
          {/* Content can be customized here */}
          <p>Content of the dialog goes here.</p>
        </div>
        <DialogFooter>
          <FooterButton onClick={onOk}>OK</FooterButton>
          <FooterButton onClick={onClose}>Cancel</FooterButton>
        </DialogFooter>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default CustomDialog;
