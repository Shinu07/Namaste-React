
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