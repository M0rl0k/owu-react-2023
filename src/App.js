import {useState} from "react";

import JsonAPIComponent from "./components/JsonAPIContainer/JsonAPIComponent";
import CarsContainer from "./components/CarsContainer/CarsContainer";

function App() {

    const [flag, setFlag] = useState(false)

   return (
      <>
        <button onClick={()=> setFlag(!flag)}>JSON/CARS</button>
          {flag ? <JsonAPIComponent/> : <CarsContainer/>}
      </>
  );
}

export default App;
