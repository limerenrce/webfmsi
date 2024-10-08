import { Routes, Route } from "react-router-dom";

import "antd/dist/reset.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./assets/styles/adaptive.css";


import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import PrivateRoute from "./components/layout/PrivateRoute";
import Blank from "./pages/Blank"


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={<Dashboard/>}/>}
          />
          <Route
            exact
            path="/orders"
            element={<PrivateRoute component={<Orders/>}/>}
          />
          <Route
            exact
            path="/categories"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/products"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/report-orders"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/summary"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/product-sales-report"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/profile"
            element={<PrivateRoute component={<Blank/>}/>}
          />
          <Route
            exact
            path="/membership"
            element={<PrivateRoute component={<Blank/>}/>}
          />
        </Routes>
    </div>
  );
}

export default App;
