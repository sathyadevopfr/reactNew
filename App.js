const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello React",
  React.createElement("div", { id: "parent" }, [
    [
      React.createElement("h1", { id: "child" }, " h1 child tag"),
      React.createElement("h2", { id: "child" }, " h2 child tag"),
      React.createElement("h3", { id: "child" }, " h3 child tag"),
    ],
    [
      React.createElement("h1", { id: "child" }, " h1 child tag"),
      React.createElement("h2", { id: "child" }, " h2 child tag"),
      React.createElement("h3", { id: "child" }, " h3 child tag"),
    ],
  ])
);
console.log(heading) //  react object "not an tag yet"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);// here it converts the object into tag and put the tag into browser


