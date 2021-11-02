import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "../pages/Game";
import Settings from "../pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/history' component={History} /> */}
        <Route exact path='/game' component={Game} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/' component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
