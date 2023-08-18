import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: heading},"Namaste React");

const heading = <h1 className="heading">Namaste Javascript</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
