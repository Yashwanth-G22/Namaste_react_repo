import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Cart } from "./components/cart/cart";
import { Error } from "./components/Error";
import styled from "styled-components";
import { Footer } from "./components/footer/footer";

const AppLayoutWrapper = styled.div`
  display: grid;
  row-gap: 10px;
`;

const AppLayout = () => {
  return (
    <AppLayoutWrapper>
      <Header />
      <Body />
      <Footer/>
    </AppLayoutWrapper>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>
);
