import React, { useState } from "react";
import axios from "axios";

const MakeTweet = () => {
  const [message, setMessage] = useState("");
  const [id, setId] = useState("1");

  const sendMessage = () => {
    if (message != "") {
      axios({
        method: "post",
        url: "/twitter/compose/tweet",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          content: message,
          user_id: id
        }
      });
      setMessage("");
    }
  };
  return (
    <div>
      <textarea
        name="Tweet"
        cols="30"
        rows="10"
        placeholder="What's happening?"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Tweet</button>
    </div>
  );
};

export default MakeTweet;
