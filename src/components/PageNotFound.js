import React, { Component } from "react";
import { Link } from "react-router-dom";

const PagenotFound = (props) => {
    return (
        <div>
            <h3>404</h3>
            <Link to="/">Go to Dashboard</Link>
        </div>
    )
}
export default PagenotFound;
