import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Modify from "./components/Modify";
import Appointments from "./components/Appointments";

function App() {
  return (
    <div className="App">
      <h1 className="AppHeader">Appointment App</h1> 
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="/details/:id" element={<List />}></Route>
          <Route  exact path="/modify/:id" element={<Modify />}></Route>
          <Route  path="/allAppointments" element={<Appointments />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
