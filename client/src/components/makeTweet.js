import React, { useState } from "react";
import axios from "axios";

const MakeTweet = () => {
  const [message, setMessage] = useState("");
  const [id] = useState("1");

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
    <div className="box font row makeTweet">
      <div className="col-2-custom">
        <img
          className="picture"
          src="https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg"
        />
      </div>
      <div className="col-10">
        <textarea
          id="text-entry"
          className="text-input"
          name="Tweet"
          placeholder="What's happening?"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <div className="footer">
          <button className="tweet-btn font" onClick={sendMessage}>
            Tweet
          </button>
        </div>
      </div>

      <style jsx>{`
        .text-input {
          resize: none;
          border: none;
          outline: none;
          width: 100%;
          background-color: inherit;
          font-size: 24px;
          color: #fff;
          overflow: auto;
        }

        .tweet-btn {
          border-radius: 30px;
          width: 80px;
          height: 40px;
          background-color: #1ca1f2;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
        }

        .tweet-btn:hover {
          background-color: #1991da;
        }

        .footer {
          text-align: right;
        }

        .picture {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }

        .makeTweet {
          border-bottom: 6px solid #38444d;
        }
      `}</style>

      <script jsx>
        {`
            function textAreaAdjust(o) {
              o.style.height = "1px";
              o.style.height = (25+o.scrollHeight)+"px";
              console.log('hola');
            }
        `}
      </script>
    </div>
  );
};

export default MakeTweet;
