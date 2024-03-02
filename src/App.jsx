import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import CreateUser from "./Componets/CreateUser";
import User from "./Componets/User";
import Edituser from "./Componets/Edituser";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<Edituser/>} path="/edit/:abc"/>   {/* here we use /:abc  after path becaue this abc in variable to store the perticular data from db.json  (this abc we call in User.jsx) */}
        <Route element={<CreateUser/>} path="/"/>
        <Route element={<User/>} path="/User"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
