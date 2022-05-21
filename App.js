import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CrearReq from "./components/crear_req.component.js";
import CrearDes from "./components/crear_des.component.js";
import AsignarReq from "./components/asignar_req.component";
import "./App.css";

class App extends Component{
  render()  {
    return(
      <Router>
       
        <div>
             <header>
           
              <ul className="menu">
                <li className="navbar-item">
                    <Link to="/create_req" className="nav-link">CREAR REQUERIMIENTO</Link>                    
                </li>
                <li className="navbar-item">
                    <Link to="/create_dev" className="nav-link">CREAR DESARROLLADOR</Link>                    
                </li>     
                <li className="navbar-item">
                    <Link to="/assign" className="nav-link">ASIGNAR REQUERIMIENTO</Link>                    
                </li>      
              </ul>              
          
          </header>
        </div>  
            
        <Routes>
        <Route path="/create_dev" exact element={<CrearDes/>} />
        <Route path="/assign" element={<AsignarReq/>} />
        <Route path="/create_req" element={<CrearReq/>} />             
        </Routes>   

     </Router>
    );
  }
}
export default App;
