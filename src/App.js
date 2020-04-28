import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Stories from "./components/Stories/Stories";
import Share from "./components/Share/Share";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Stories />
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
