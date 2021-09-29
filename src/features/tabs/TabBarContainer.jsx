import React, { useState } from "react";

import TabBar from "./TabBar";

const TabBarContainer = ({ tabs, ...otherProps }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]?.name);

  return (
    <TabBar
      {...otherProps}
      currentTab={currentTab}
      onTabClick={setCurrentTab}
      tabs={tabs}
    />
  );
};

export default TabBarContainer;
