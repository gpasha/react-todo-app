import { Alert } from './components/Alert'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="container">
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
