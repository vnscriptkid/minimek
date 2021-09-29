import React, {Component} from "react";
import './App.css';

import SampleComponent from "./SampleComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Project Mini-Mek</h2>
                <SampleComponent />
            </div>
        );
    }
}

export default App;