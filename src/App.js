import React, {useState} from "react";
import Counter from "./Component/Counter";

function App() {

    let [value, setValue] = useState("Текст в инпуте")


  return (
    <div className="App">
        <Counter/>
    </div>
  );
}

export default App;
