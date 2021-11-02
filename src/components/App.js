import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "../pages/Game";
import Settings from "../pages/Settings";
import History from "../pages/History";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path='/history' component={History} /> */}
        <Route exact path='/game' component={Game} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/records' component={History} />
        <Route exact path='/' component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
