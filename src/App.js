import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Mercurio from "./components/pages/Mercurio/Mercurio";
import Tierra from "./components/pages/Tierra/Tierra";
import Venus from "./components/pages/Venus/Venus";
import Marte from './components/pages/Marte/Marte'
import Jupiter from "./components/pages/Jupiter/Jupiter";
import Saturno from "./components/pages/Saturno/Saturno";
import Urano from "./components/pages/Urano/Urano";
import Neptuno from "./components/pages/Neptuno/Neptuno";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/mercurio" >
          <Mercurio/>
        </Route>
        <Route path="/venus">
          <Venus/>
        </Route>
        <Route path='/tierra'>
          <Tierra/>
        </Route>
        <Route path='/marte'>
          <Marte/>
        </Route>
        <Route path='/jupiter'>
          <Jupiter/>
        </Route>
        <Route path="/saturno">
          <Saturno/>
        </Route>
        <Route path='/urano'>
          <Urano/>
        </Route>
        <Route path='/neptuno'>
          <Neptuno/>
        </Route>
      </Switch>
        
        
    
    </BrowserRouter>
      
  );
}

export default App;
