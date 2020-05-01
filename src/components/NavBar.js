import React from "react";
import SearchBar from "./SearchBar";

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
        >
            <span className="collapse navbar-collapse row" id="navbarNav" />
        </button>
        <div className="collapse navbar-collapse row" id="navbarNav">
            <div className="search-area col-4">
                < SearchBar />
            </div>
        </div>
        </nav>
    );
};

export default Nav;
