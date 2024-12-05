import React, { useState } from 'react';
import './TabComponent.css'; // Import CSS

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Tab 1', content: 'This is the content for Tab 1.' },
    { label: 'Tab 2', content: 'This is the content for Tab 2.' },
    { label: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabComponent;
