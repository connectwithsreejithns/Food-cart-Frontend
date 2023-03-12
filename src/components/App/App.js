import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Poster from "../Poster/Poster";
import Promotion from "../Promotion/Promotion";
import './App.css'
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Promotion/>
      <Poster/>
      <Footer/>
      <Outlet/>
    </div>
  );
}

export default App;
