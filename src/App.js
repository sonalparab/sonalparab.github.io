import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Interests from "./pages/Interests"

function App() {
  return (
    <div style={{ margin: "30px 100px" }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/experience' component={Experience} />
          <Route path='/interests' component={Interests} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
