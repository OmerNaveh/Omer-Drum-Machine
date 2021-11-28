import PadBunk from "./Components/PadBunk";
import Header from "./Components/Header";
function App() {
  return (
    <div>
      <Header />
    <div className="drumMachine" id="drum-machine">
      <div id='display'>
        display
      </div>
      <PadBunk class='pad-Bank'/>
    </div>
    </div>
  );
}

export default App;
