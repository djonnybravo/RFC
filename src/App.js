import React, {useState} from "react";
import "./styles/app.css"
import PostItem from "./Component/PostItem";

function App() {

    let [value, setValue] = useState("Текст в инпуте")


    return (
        <div className="App">
            <PostItem post = {{id:1, title: 'Javascript', body: 'Description'}}/>
        </div>
    );
}

export default App;
