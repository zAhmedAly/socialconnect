import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import Login from "./components/login/Login";
import Register from "./pages/register/Register";
import "./App.css";

const App = () => {
  return (
    // <>
    //   <div> App </div>
    // </>
    <Router>
      <Header />
      <main className="py-4">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
