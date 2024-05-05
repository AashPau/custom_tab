import React from "react";
import { Tabs } from "./Tabs";
import "./Tabs.css";

const RandomComponent = () => {
  return <h1>Some Random content</h1>;
};

export const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  const handleOnChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleOnChange} />
    </div>
  );
};
