import React, {useState} from "react";
import "./styles/app.css"
import PostItem from "./Component/PostItem";

function App() {

    let [value, setValue] = useState("Текст в инпуте")


    return (
        <div className="App">
            <PostItem />
        </div>
    );
}

export default App;
