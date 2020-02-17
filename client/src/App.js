import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import MakeTweet from "./components/makeTweet";
import Tweet from './components/tweet'

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
      <h1>Home</h1>
      <MakeTweet />
      {
        tweetList.map(t => <Tweet
          key={t.id}
          id={t.id}
          content={t.content}
          username={t.username}
          name={t.name}
        />)
      }
    </div>
  );
};

export default App;
