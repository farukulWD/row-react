import React from "react"
import ReactDOM from "react-dom/client";

import { HelloWorld } from "./another";

const App = ()=>{
  {
    return  React.createElement("h1",{style:{color:"red"}},"Hello World, From fokira react app", HelloWorld())

}
}

// const HelloWorld = () => {
//   return <h2>Hello world</h2>;
// };

// const App = () => {
//   return(
//   <React.Fragment>
//     <div>
//       <h1>This is a fokira react app</h1>
//     </div>
//     <HelloWorld />
//   </React.Fragment>)
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));