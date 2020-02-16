import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MakeTweet from "./components/makeTweet";

const App = () => {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`/twitter`)
        .then(res => res.data)
        .then(data => setTweetList(data));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Fake Twitter</h1>

      {tweetList.map((m, i) => (
        <p key={i}>
          {m.id} - {m.content}
        </p>
      ))}
      <MakeTweet />
    </div>
  );
};

export default App;
