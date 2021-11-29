import PadBunk from "./Components/PadBunk";
import Header from "./Components/Header";
import React, { useState} from "react";

export const UserContext = React.createContext()

function App() {
  const [played, setPlayed]= useState(null)
  return (
    <UserContext.Provider value={setPlayed}>
    <div>
      <Header />
    <div className="drumMachine" id="drum-machine">
      <div id='display' className='display'>
        {played}
      </div>
      <PadBunk class='pad-Bank'/>
    </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
