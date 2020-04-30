import React from "react";
import DataArea from "./components/DataArea.js";

//main < dataarea < datatable, navbar(searchbar here), api(from util) < databody(export to datatable)  
//header, wrapper, footer(optional), searchbar


function Main() {
    return(
        <DataArea />
    );
};

export default Main;