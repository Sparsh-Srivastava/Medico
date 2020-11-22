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
import DoctorView from "./container/DoctorView/DoctorView";
/* import DoctorMsg from "./container/DoctorMsg"; */
import PatientInfoForm from "./component/PatientInfo/PatientInfoForm";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={main}></Route>
      <Route path="/loginPt" component={LoginPt}></Route>
      <Route path="/signPt" component={SignPt}></Route>

      <Route path="/doctorView" component={DoctorView} />
      <Route path="/dashboard" component={Home}></Route>
      <Route path="/loginDoc" component={LoginDoc}></Route>


      <Route path="/signDoc" component={SignupDoc}></Route>

      <Route path="/patientInfoForm" component={PatientInfoForm} />
      {/* <Route path="/doctorMsg"  component={DoctorMsg}></Route> */}
    </Switch>
  );
}

export default App;
