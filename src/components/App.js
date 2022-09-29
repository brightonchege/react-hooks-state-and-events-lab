import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

 // const appClass = false ? "App dark" : "App light"
const [DarkMode,setDarkMode] = useState(false)
function DarkModeActivate(){
  setDarkMode((DarkMode)=> !DarkMode)
}
const appClass = DarkMode ? "App dark" : "App light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={DarkModeActivate}>
          {DarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
