import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './game_blog/Home';
import Create from './game_blog/Create';
import GameDetails from './game_blog/GameDetails';
import NotFound from './game_blog/NotFound';
import Rune from './memory_game/Rune';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/games/:id">
              <GameDetails />
            </Route>
            <Route path="/runematch">
              <Rune />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
