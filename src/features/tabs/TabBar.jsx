import { Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ToggleDisplay from "common/components/ToggleDisplay";
import Tab from "./Tab";
import { selectTab } from "./tabsActions";
import { selectCurrentTab } from "./tabsSelectors";

const TabBar = ({ tabs, currentTab, onTabClick, ...otherProps }) => {
  const tabItems = tabs.map((tabInfo) => {
    const { name, label } = tabInfo;

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={onTabClick}
      />
    );
  });

  const tabPanels = tabs.map((tabInfo) => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  );
};

TabBar.propTypes = {
  // from parent
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
    })
  ),
  // from hoc
  currentTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  currentTab: selectCurrentTab(state),
});

const actions = { onTabClick: selectTab };

export default connect(mapState, actions)(TabBar);
