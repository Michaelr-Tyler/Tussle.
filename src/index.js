import  React  from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Tussle } from "./components/Tussle";
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Tussle />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

