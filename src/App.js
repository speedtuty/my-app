import { Component } from "react";
import Counter from "./Counter";
import Productlist from "./Productlist";
import ConditionalRendering from "./ConditionalRendering";
import FormData from "./Program/FormData";
import Lifecyclemethod from "./Lifecyclemethod";
import CounterFuncComp from "./FunctionalComponent/CounterFunComp";
import products from "./products";
import ProductsFun from "./FunctionalComponent/ProductsFun";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Program/Users";
import UserefPgm from "./UserefPgm";
import Cart from "./Program/Cart";
import "./App.css"
import Mycart from "./Program/Mycart";
import FavoriteColor from "./FavoriteColor";
import Usecallbackfunction from "./Usecallbackfunction";
import PostCode from "./Program/PostCode";
import Blog from "./Program/Blog";
import Todolist from "./Program/Todolist";



const App = () => {
  {
    return (
      <Router>
        <Routes>
          {/* <Counter />
        <Productlist />
        <ConditionalRendering />
      <ProductsFun data={products} /> 
          <Lifecyclemethod />*/}
          <Route exact path="/form" Component={FormData} />
          <Route exact path="/" Component={CounterFuncComp} />
          <Route exact path="/users" Component={Users} />
          <Route exact path="/useref" Component={UserefPgm} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path='/mycart' Component={Mycart} />
          <Route exact path='/color' Component={FavoriteColor} />
          <Route exact path='/usecallback' Component={Usecallbackfunction} />
          <Route exact path='/blog' Component={Blog} />
          <Route exact path='/todo' Component={Todolist} />
         
        

        </Routes>
      </Router>
    );
  }
};

export default App;
