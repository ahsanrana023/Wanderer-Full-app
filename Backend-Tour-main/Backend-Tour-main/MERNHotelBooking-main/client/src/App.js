import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import LandingScreen from "./screens/LandingScreen";
import Tourscreen from "./screens/Tourscreen";
import TourBookingscreen from "./screens/TourBookingscreen";
import ErrorPage from "./screens/ErrorPage";
import Footer from "./components/Footer";
import Guides from "./screens/Guides";
import Error from "./components/Error";
import Productscreen from "./screens/Productscreen";
import ProductBuyscreen from "./screens/ProductBuyscreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingScreen} />
          {/* <Route path="/home" exact component={Homescreen} /> */}
          <Route path="/hotel" exact component={Homescreen} />
          <Route path="/tour" exact component={Tourscreen} />
          <Route path="/product" exact component={Productscreen} />

          <Route
            path="/book/:roomid/:fromdate/:todate"
            exact
            component={Bookingscreen}
          />
          <Route
            path="/booktour/:tourid/:fromdate/:todate"
            exact
            component={TourBookingscreen}
          />
          <Route
            path="/buyproducts/:productid"
            exact
            component={ProductBuyscreen}
          />

          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/profile" exact component={ProfileScreen} />
          <Route path="/bookings" exact component={ProfileScreen} />
          <Route path="/admin" exact component={AdminScreen} />
          <Route path="/guides" exact component={Guides} />
          <Route path="*" exact component={ErrorPage} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
