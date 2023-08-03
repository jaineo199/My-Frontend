import React from "react";
import { Route, Routes, Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import { Book } from "./pages/Book";
import NewBook from "./pages/NewBook";
import BooksLayout from "./pages/BooksLayout";
import BookSidebar from "./pages/BookSidebar";
const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      children: [
        { index: true, element: <BookList /> },
        { path: ":id", element: <Book /> },
      ],
    },
  ]);

  return element;
};

export default App;
