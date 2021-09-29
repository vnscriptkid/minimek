import { Header, Container } from "semantic-ui-react";

import TabBarContainer from "features/tabs/TabBarContainer";
import Mechs from "features/mechs/Mechs";
import Pilots from "features/pilots/Pilots";
import UnitInfo from "features/unitInfo/UnitInfo";
import UnitOrganization from "features/unitOrganization/UnitOrganization";

import "./App.css";

const tabs = [
  { name: "unitInfo", label: "Unit Info", component: UnitInfo },
  { name: "pilots", label: "Pilots", component: Pilots },
  { name: "mechs", label: "Mechs", component: Mechs },
  {
    name: "unitOrganization",
    label: "Unit Organization",
    component: UnitOrganization,
  },
];

const App = () => (
  <div className="App">
    <div className="App-header">
      <Header inverted as="h1">
        Project Mini-Mek
      </Header>
    </div>
    <Container>
      <TabBarContainer tabs={tabs} size="massive" />
    </Container>
  </div>
);

export default App;
