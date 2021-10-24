import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import Products from './Component/Products/Products';
import UpdateProduct from './Component/UpdateProduct/UpdateProduct';
import AddProduct from './Component/AddProduct/AddProduct';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/add_products">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/products/update/:productId">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
