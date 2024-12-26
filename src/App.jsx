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
import { National } from "./national/National";
import { Entertainment } from "./entertainment/Entertainment";
import { LifeStyle } from "./Life Style/LifeStyle";
import { Election } from "./election/Election";

const App = () => {
  const router = createBrowserRouter([
    {
      // home

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
    // sign
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
    // stories
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
    // video
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
    // e--paper
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
    // cricket
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
    // national
    {
      path: "/national",
      element: (
        <>
          <Navbar />
          <NavItems />
          <National />
          <Footer />
        </>
      )
    },
    // entertainment

    {
      path: "/entertainment",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Entertainment />
          <Footer />
        </>
      )
    },
    // lifeStyle
    {
      path: "/lifestyle",
      element: (
        <>
          <Navbar />
          <NavItems />
          <LifeStyle />
        </>
      )
    },
    // Election
    {
      path: "/election",
      element: (
        <>
          <Navbar />
          <NavItems />
          <Election />
          <Footer />
        </>
      )
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
