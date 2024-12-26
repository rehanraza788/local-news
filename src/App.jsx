import React from "react";
import { Navbar } from "./nav-bar/Navbar";
import { NavItems } from "./nav-bar/NavItems";
import { SignUp } from "./Sign-Up/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BreakingNews } from "./Breaking News/BreakingNews";
import { Error } from "./error Page/Error";
import { NewsList } from "../src/News List/NewsList";
import { Stories } from "../src/stories/Stories";
import { Video } from "./videos/Video";
import Footer from "./footer/Footer";
import { Paper } from "./e-paper/Paper";
import { Cricket } from "./cricket/Cricket";
import { News } from "./cricket/News";
import { Schedule } from "./cricket/Schedule";
import { Teams } from "./cricket/Teams";
import { Ranking } from "./cricket/Ranking";
import { ODIPage } from "./cricket/ODIPage";
import { TestPage } from "./cricket/TestPage";
import { T20Page } from "./cricket/T20Page";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <NavItems />
          <BreakingNews />
          <NewsList />
          <Footer />
        </>
      )
    },
    {
      path: "/sign",
      element: (
        <>
          <Navbar />
          <NavItems />
          <SignUp />
          <Footer />
        </>
      )
    },
    {
      path: "/stories",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Stories />
          <Footer />
        </>
      )
    },
    {
      path: "/video",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Video />
          <Footer />
        </>
      )
    },
    {
      path: "/paper",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Paper />
          <Footer />
        </>
      )
    },
    {
      path: "/cricket",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Cricket />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <>
              <News />
              <Footer />
            </>
          )
        },
        {
          path: "news",
          element: (
            <>
              <News />
              <Footer />
            </>
          )
        },
        {
          path: "schedule",
          element: (
            <>
              <Schedule />
              <Footer />
            </>
          )
        },
        {
          path: "team",
          element: (
            <>
              <Teams />
              <Footer />
            </>
          )
        },
        {
          path: "ranking",
          element: (
            <>
              <Ranking />
              <Footer />
            </>
          ),
          children: [
            {
              path: "",
              element: (
                <>
                  <ODIPage />
                </>
              )
            },
            {
              path: "odi",
              element: (
                <>
                  <ODIPage />
                </>
              )
            },
            {
              path: "test",
              element: (
                <>
                  <TestPage />
                </>
              )
            },

            {
              path: "t20",
              element: (
                <>
                  <T20Page />
                </>
              )
            }
          ]
        }
      ]
    },

    {
      path: "*",
      element: (
        <>
          <Error />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
