import React from "react";
import store from "./store/store";
import styled from "styled-components";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Error } from "./components/Error";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Cart } from "./components/cart/cart";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer/footer";
import { ResMenuPage } from "./components/res-container/Res-menu-page";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const AppLayoutWrapper = styled.div`
  display: grid;
  row-gap: 10px;
`;

const AppLayout = () => {
  return (
    <AppLayoutWrapper>
      <Header />
      <Outlet/>
      <Footer/>
    </AppLayoutWrapper>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>
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
      },
      {
        path: '/restaurant/:resId',
        element: <ResMenuPage/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>
);
