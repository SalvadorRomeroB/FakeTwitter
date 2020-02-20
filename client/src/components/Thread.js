import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import AloneTweet from "./aloneTweet";
import Reply from './reply'


const Thread = (props) => {
  const [tweetList, setTweetList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`/twitter/tweet/complete/${props.match.params.id}`)
        .then(res => res.data)
        .then(data => setTweetList(data));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  let data = []
  let thread = []
  let replys = []

  return (
    <div className="App">
      <h1>Thread</h1>

      {
        Object.keys(tweetList).forEach(function (key) {
          data.push(tweetList[key])
          Object.keys(tweetList[key]).forEach(function (index) {
            if (key == 'thread') {
              thread.push(tweetList[key][index])
            } else {
              replys.push(tweetList[key][index])
            }
          })
        })
      }

      {
        thread.map(t => <AloneTweet
          key={t.id}
          id={t.id}
          content={t.content}
          username={t.username}
          name={t.name}
        />)
      }

      {
        replys.map(t => <Reply
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

export default Thread;
