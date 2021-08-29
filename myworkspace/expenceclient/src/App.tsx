import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from "./components/loader/loader";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
//import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
      <Navbar />

      <Router>
        {/* <Route path="/" exact component={Register}></Route> */}
        <Route path="/auth" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </Router>
    </>
  );
};

export default App;
