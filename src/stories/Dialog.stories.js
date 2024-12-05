import React, { useState } from 'react';
import Dialog from './Dialog';
import { Button } from './Button';
import TextInput from './TextInput';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button primary size="small" onClick={openDialog} label="Open Dialog" />
      <Dialog isOpen={isOpen} onClose={closeDialog} title={args.title}>
        {args.children}
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  children: 'This is the content of the dialog.',
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: 'Custom Dialog',
  children: (
    <div>
      <p>Custom content inside the dialog.</p>
      <TextInput floatingLabelTxtInp={true} placeholder="Input field" value='' labelPosition='left' label='User Name'/>
    </div>
  ),
};
Default.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import './Dialog.css';

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="dialog-content">
          {children}
        </div>
        <div className="dialog-footer">
          <button className="footer-button" onClick={onClose}>OK</button>
          <button className="footer-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
`
      ,
    },
  },
};