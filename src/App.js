import PostsComponent from "./components/PostsContainer/Posts/PostsComponent";
import {useState} from "react";
import RocketsComponent from "./components/RocketsContainer/Rockets/RocketsComponent";

function App() {

  const [flag, setFlag] = useState(true)

  return (
      <div>
        <button onClick={()=> setFlag(!flag)}>Switch Task</button>
          {flag ? <PostsComponent/> : <RocketsComponent/>}
      </div>
  );
}

export default App;
