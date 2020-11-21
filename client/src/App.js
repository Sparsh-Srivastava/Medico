// import logo from './logo.svg';
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import {Route,Link,Switch} from 'react-router-dom';
import SignupDoc from "./container/Auth/SignDoc/signupDoc";
import SignPt from "./container/Auth/SignPt/signupPt";
import LoginDoc from "./container/Auth/LoginDoc/loginDoc";
import LoginPt from "./container/Auth/LoginPt/loginPt";
import Home from "./container/dashboard";
import main from "./container/Landing/landing";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={main}></Route>
      <Route path="/signPt" exact component={SignPt}></Route>
      <Route path="/dashboard" exact component={Home}></Route>
      <Route path="/signDoc" exact component={SignupDoc}></Route>
      <Route path="/loginDoc" exact component={LoginDoc}></Route>
      <Route path="/loginPt" exact component={LoginPt}></Route>
    </Switch>
  );
}

export default App;
