import React from "react";
import Nav from "./Nav";
import HogDisplay from "./HogDisplay";

import hogs from "../porkers_data";

function App() {
  //console.log(porkers_data);

  return (
    <div className="App">
      <Nav />
      <HogDisplay hogs={hogs} />
    </div>
  );
}

export default App;
