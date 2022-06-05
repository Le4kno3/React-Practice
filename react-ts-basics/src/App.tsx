import React from "react";
import "./App.css";

//specify return type of "App" function as "React.FC"
const App: React.FC = () => {
  return <div className="App">Hello World</div>;
};

//the defined react function needs to be exported so that, index.tsx can render it on website.
export default App;
