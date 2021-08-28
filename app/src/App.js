import { Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  );
}

export default App;
