import React, { useState } from "react";
import PropTypes from "prop-types";

import TabBar from "./TabBar";

const TabBarContainer = ({ tabs, ...otherProps }) => {
  return <TabBar {...otherProps} tabs={tabs} />;
};

TabBarContainer.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ),
};

export default TabBarContainer;
