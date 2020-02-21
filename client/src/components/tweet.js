import React, { useState } from "react";
import { updateMessagerReq, updateReplyReq } from "./APIs";

const Tweet = props => {
  const [input, setInput] = useState(props.content);
  const [flag, setFlag] = useState({
    btnFlag: false,
    inputFlag: false
  });
  const { btnFlag, inputFlag } = flag;

  function getPp() {
    if (props.username === "klauskie") {
      return "https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg";
    } else {
      return "https://i.pinimg.com/originals/8e/fb/05/8efb05db4589b84459e22257b4e06e03.jpg";
    }
  }

  const editMessage = () => {
    setFlag({ inputFlag: true });
    setFlag({ btnFlag: true });
  };

  const done = () => {
    setFlag({ inputFlag: false, btnFlag: false });
    if (props.replyFlag === true) {
      updateMessagerReq(input, props.id);
    } else {
      updateReplyReq(input, props.id);
    }
  };

  return (
    <div className="box">
      {btnFlag === false ? (
        <a className="myButton font" onClick={() => editMessage()}>
          Edit
        </a>
      ) : (
        <a className="myButton font" onClick={() => done()}>
          Done
        </a>
      )}
      {/* LINEA PENDEJA */}
      {props.replyFlag === false ? (
        <div className="row">
          <div className="col-2-custom">
            <div className="vertical-line"></div>
          </div>
        </div>
      ) : (
        ""
      )}

      <tweet className="row">
        <div className="col-2-custom">
          <img className="picture" src={getPp()} />
        </div>
        <div className="col-10">
          <div>
            <span className="name font">{props.name}</span>
            <span className="username font">@{props.username}</span>
          </div>
          <div className="content-box">
            {/* TRANSITION HERE */}
            {inputFlag === false ? (
              <span className="content font">{props.content}</span>
            ) : (
              <input
                type="text"
                name="name"
                onChange={e => setInput(e.target.value)}
                value={input}
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    done();
                  }
                }}
              />
            )}
          </div>
          <div className="bottom-bar">
            {/* ICONO */}
            {props.replyFlag === true ? (
              <a className="reply-button" href={`thread/${props.id}`}>
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </tweet>

      <style jsx>{`
        .content {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }
        .username {
          color: #8394a0;
          padding-left: 13px;
          text-decoration: none;
        }
        .name {
          color: #fff;
          text-decoration: none;
          line-height: 1.3125;
          font-weight: 900;
        }
        .box tweet {
          height: 100%;
          width: 100%;
          text-decoration: none;
        }
        .picture {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 auto;
        }
        .content-box {
          margin-top: 5px;
        }
        .bottom-bar {
          margin-top: 10px;
          max-height: 20px;
          color: #c4cdd4;
        }
        .bottom-bar svg {
          max-width: 18px;
          fill: #c4cdd4;
        }
        .myButton {
          background-color: #15202b;
          border-radius: 20px;
          border: 1px solid #c4cdd4;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-size: 7px;
          padding: 7px 7px;
          text-decoration: none;
          float: right;
        }
        .myButton:hover {
          background-color: #415989;
        }
        .myButton:active {
          position: relative;
          top: 1px;
        }
        input[type="text"] {
          background: transparent;
          border: 1px solid #415989;
          font-size: 16px;
          color: #8394a0;
        }

        .reply-button {
          padding: 8px 4px 1px 4px;
          border-radius: 30px;
        }

        .reply-button:hover {
          background-color: #415989;
        }
        .vertical-line {
          border-right: rgb(61, 84, 102) 2px solid;
          height: 30px;
          width: 1px;
          margin: 4px 0 8px 22px;
        }
      `}</style>
    </div>
  );
};

export default Tweet;
