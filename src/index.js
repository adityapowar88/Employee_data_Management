import {createRoot} from   "react-dom/client"   // here we create a path or root between index.js and index.html   ( "react-dom/client"  this is a path only always use same)
import App from "./App.jsx"              // here we import the App.jsx file
createRoot(document.getElementById("root")).render(<App></App>)    // this is call the id from index.html  and render the App variable
