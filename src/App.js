import {Home, BigNavBar} from "./components";
import Services from "./components/services/Services.js";

import AOS from "aos";
import { useState } from "react";
import { useEffect } from "react";

function App (props) {
  const[component, setComponent] = useState(<Home/>)

    const changeComponent = (C)=>{
      setComponent(C)
    }

  useEffect(()=>{AOS.init()}, [])

  return (
    <div id="App" className={"AppContainer"}>
        <BigNavBar component={changeComponent} />

      <div>
        {component}
      </div>
    </div>
  );
}

export default App;
