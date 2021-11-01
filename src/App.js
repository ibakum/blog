import { Switch, NavLink } from "react-router-dom";
import About from './containers/About';
import Header from './containers/Header';

import "@fontsource/roboto";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <NavLink exact to="/blog">
            <div> BLOG </div>
        </NavLink>
        <NavLink to="/about">
            <About/>
        </NavLink>
      </Switch>
    </div>
  );
}

export default App;
