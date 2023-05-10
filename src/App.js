import React, {useState} from "react";
import Counter from "./Component/Counter";
import ClassCounter from "./Component/ClassCounter";

function App() {

    let [value, setValue] = useState("Текст в инпуте")


  return (
    <div className="App">
        <Counter/>
        <ClassCounter/>
    </div>
  );
}

export default App;
