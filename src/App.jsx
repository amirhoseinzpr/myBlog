import React from "react";
import { Route,Routes } from "react-router-dom";
import AuthorPage from "./components/authors/AuthorPage";
import BlogPage from "./components/blogs/BlogPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
