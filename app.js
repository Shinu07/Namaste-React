import React from "react";
import ReactDOM from "react-dom/client" ; //recent change to add client at the end to import react-dom

const heading = React.createElement(
    "h1",
    { id: "container" },
    "Heading1"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "container"
    },
    "Heading2"
);

const heading3 = React.createElement(
    "h3",
    {
        id: "container"
    },
    "Heading3"
);

const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
    heading3
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);