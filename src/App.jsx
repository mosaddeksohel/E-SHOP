import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

const App = () => {
  const user = true;
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
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
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
