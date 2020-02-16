import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    axios
      .get(`/twitter`)
      .then(res => res.data)
      .then(data => setTweetList(data));
  }, []);

  return (
    <div className="App">
      <h1>Fake Twitter</h1>

      {tweetList.map((m, i) => (
        <p key={i}>
          {m.id} - {m.content}
        </p>
      ))}
    </div>
  );
};

export default App;
