import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import PostTemplate from "./Components/PostTemplate";

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Route path ='/' exact>
                <HomePage/>
            </Route>
            <Route path='/post-template'>
                <PostTemplate />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
