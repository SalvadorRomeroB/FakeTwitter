import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import AloneTweet from "./aloneTweet";
import Tweet from "./tweet";

const Thread = props => {
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

  let replys = [];
  let thread = {};

  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
          <a href="/" className="back-arrow-container">
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div className="col-3">
          <h1>Thread</h1>
        </div>
      </div>

      {Object.keys(tweetList).forEach(function(key) {
        Object.keys(tweetList[key]).forEach(function(index) {
          if (key === "thread") {
            thread = tweetList[key][index];
          } else {
            replys.push(tweetList[key][index]);
          }
        });
      })}

      <AloneTweet
        key={thread.id}
        id={thread.id}
        content={thread.content}
        username={thread.username}
        name={thread.name}
        user_id={thread.user_id}
      />

      {replys.map(t => (
        <Tweet
          key={t.id}
          id={t.id}
          content={t.content}
          username={t.username}
          name={t.name}
          replyFlag={false}
        />
      ))}

      <style jsx>{`
        .back-arrow-container {
          max-height: 30px;
          color: #c4cdd4;
          border-radius: 30px;
          padding: 20px 5px 3px 5px;
        }

        .back-arrow-container:hover {
          background-color: #415989;
        }

        .back-arrow-container svg {
          max-width: 30px;
          fill: #c4cdd4;
          padding-top: 30px;
        }
      `}</style>
    </div>
  );
};

export default Thread;
