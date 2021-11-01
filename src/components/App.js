import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../pages/Game";
import Settings from "../pages/Settings";
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/history' component={History} /> */}
        <Route exact path='/game' component={Game} />
        <Route exact path='/settings' component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
