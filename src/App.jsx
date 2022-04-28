import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
