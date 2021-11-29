import PadBunk from "./Components/PadBunk";
import Header from "./Components/Header";
import React, { useState} from "react";
import Controls from "./Components/Controls";

export const UserContext = React.createContext()

function App() {
  const [played, setPlayed]= useState(null)
  const [volume , setVolume]=useState(20)
  const [isOn,setIsOn] = useState(true)
  return (
    <UserContext.Provider value={{volume,setPlayed, isOn,setIsOn}}>
    <div>
      <Header />
    <div className="drumMachine" id="drum-machine">
      <Controls played={played} setVolume={setVolume} />
      <PadBunk class='pad-Bank'/>
    </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
