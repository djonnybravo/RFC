import React, {useState} from "react";
import "./styles/app.css"

function App() {

    let [value, setValue] = useState("Текст в инпуте")


  return (
    <div className="App">
        <div className={"post"}>
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    Javascript - is programming language
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    </div>
  );
}

export default App;
