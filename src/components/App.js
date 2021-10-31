import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../pages/Game";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/game' component={Game} />
        {/*         <Route exact path='/characters' component={Characters} />
        <Route exact path='/characters/:id' component={CharacterDetail} />
        <Route exact path='/charactercomics/:id' component={List} />
        <Route exact path='/characterstories/:id' component={List} />
        <Route exact path='/' component={Home} />
 */}{" "}
      </Switch>
    </Router>
  );
}

export default App;
