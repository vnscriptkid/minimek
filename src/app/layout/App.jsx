import { Header, Container } from "semantic-ui-react";

import Mechs from "features/mechs/Mechs";
import Pilots from "features/pilots/Pilots";
import UnitInfo from "features/unitInfo/UnitInfo";
import UnitOrganization from "features/unitOrganization/UnitOrganization";

import "./App.css";
import TabBar from "features/tabs/TabBar";
import Tools from "features/tools/Tools";

const tabs = [
  { name: "unitInfo", label: "Unit Info", component: UnitInfo },
  { name: "pilots", label: "Pilots", component: Pilots },
  { name: "mechs", label: "Mechs", component: Mechs },
  {
    name: "unitOrganization",
    label: "Unit Organization",
    component: UnitOrganization,
  },
  {
    name: "tools",
    label: "Tools",
    component: Tools,
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
      <TabBar tabs={tabs} size="massive" />
    </Container>
  </div>
);

export default App;
