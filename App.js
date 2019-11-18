import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <div>React Is rendering</div>;
};

ReactDom.render(React.createElement(App), document.getElementById("root"));
