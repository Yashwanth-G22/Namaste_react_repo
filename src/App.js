import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { Body } from "./components/Body";
import { Error } from "./components/Error";
import { Header } from "./components/Header";
import { Cart } from "./components/cart/cart";
import { Footer } from "./components/footer/footer";
import { ResMenuPage } from "./components/res-container/Res-menu-page";
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { useLazyLoading } from "./hooks/useLazyloading";

const AppLayoutWrapper = styled.div`
  display: grid;
  row-gap: 10px;
`;

const Contact = lazy(async () => {
  const module = await import('./components/Contact');
  console.log(module.Contact);
  return { default: module.Contact };
});

const About =  useLazyLoading(() => import('./components/About'));

const AppLayout = () => {
  
  return (
    <AppLayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </AppLayoutWrapper>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: (<About />)
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<h2>loading...</h2>}>
            <Contact />
          </Suspense>
          )
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <ResMenuPage />
      }
    ],
    errorElement: <Error />
  }
])
