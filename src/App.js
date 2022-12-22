import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown/Dropdown";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Homes from "./pages/Homes";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";
import { GlobalStyle } from "./globalStyle";

function App() {

  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
   <BrowserRouter>
   <GlobalStyle/>
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>

   <Switch>
     <Route path="/" component={Main} exact/>
     <Route path="/about" component={About} exact/>
     <Route path="/homes" component={Homes} exact/>
     <Route path="/rentals" component={Rentals} exact/>
     <Route path="/contact" component={Contact} exact/>
   </Switch>

   <Footer/>
   </BrowserRouter>
  );
}

export default App;
