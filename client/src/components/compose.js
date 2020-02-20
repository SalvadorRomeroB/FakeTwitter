import React, { useState } from 'react';
import axios from "axios";

const Compose = (props) => {

    const [message, setMessage] = useState("");
    const [id, setId] = useState("1");

    function textAreaAdjust() {
        let o = document.getElementById("text-entry");
        o.style.height = "1px";
        o.style.height = (25 + o.scrollHeight) + "px";
        console.log('hola');
    }

    const sendMessage = () => {
        if (message != "") {
            setId(1)
            axios({
                method: "post",
                url: "/twitter/compose/reply",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    content: message,
                    user_id: id,
                    thread_id: props.id
                }
            });
            setMessage("");
            return <div></div>;
        }
    };

    function getPp() {
        if (props.username == 'klauskie') {
            return "https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg"
        } else {
            return "https://i.pinimg.com/originals/8e/fb/05/8efb05db4589b84459e22257b4e06e03.jpg";
        }
    }

    return (
        <div id="back">
            <div id="reply-box" className="box">
                <a id="close-btn" href={`/thread/${props.id}`}>x</a>
                <br />
                <div className="row">
                    <div className="col-2-custom">
                        <img className="picture" src={getPp()} />
                    </div>
                    <div className="col-10">
                        <div>
                            <span className="name font">{props.name}</span>
                            <span className="username font">@{props.username}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2-custom">
                        <div className="vertical-line"></div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-2-custom">
                        <img className="picture" src={getPp()} />
                    </div>
                    <div className="col-10">
                        <div>
                            <span className="name font">{props.name}</span>
                            <span className="username font">@{props.username}</span>
                        </div>
                        <div className="content-box">
                            <textarea id="text-entry" className="text-input"
                                name="Tweet"
                                placeholder="Write a reply"
                                value={message}
                                rows="5"
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="line-bar"></div>
                </div>
                <div className="row">
                    <div className="footer">
                        <button className="tweet-btn font" onClick={sendMessage}>Reply</button>
                    </div>
                </div>
            </div>




            <style jsx>{`

            #reply-box {
                z-index: 10;
                margin: 10% auto;
            }

            #back {
                z-index: 9;
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,0.8);
            }

            .vertical-line {
                border-right: rgb(61, 84, 102) 2px solid;
                height: 40px;
                width: 1px;
                margin: 8px 0 8px 22px;
            }

            .line-bar {
                padding: 5px 0 5px 0;
                border-bottom: rgb(56, 68, 77) 1px solid;
                width: 100%;
            }

            .text-input {
                resize: none;
                border: none;
                outline: none;
                width: 100%;
                background-color: inherit;
                font-size: 24px;
                color: #FFF;
                overflow: auto;
             }
           .username {
             color: #8394A0;
             padding-left: 13px;
             text-decoration: none;
           }
           .name {
             color: #FFF;
             text-decoration: none;
             line-height: 1.3125;
             font-weight: 900;
           }

           #close-btn {
                color: #fff;
                padding: 5px;
                background-color: #15202B;
                border-radius: 20px;
                float: right;
                
            }
            
            #close-btn{
            width: 15px;
            background-color: #15202b;
            text-align: center;
            border-radius: 20px;
            border: 1px solid #c4cdd4;
            display: inline-block;
            cursor: pointer;
            color: #ffffff;
            font-size: 12px;
            padding: 5px 7px 6px 7px;
            text-decoration: none;
            float: right;
          }
          #close-btn:hover {
            background-color: #415989;
          }
          .#close-btn:active {
            position: relative;
            top: 1px;
          }

           .box a:hover {
                background-color: #192734;
            }

           .picture {
               width: 50px;
               height: 50px;
               border-radius: 50%;
               margin: 0 auto;
           }

           .tweet-btn {
            border-radius: 30px;
            width: 80px;
            height: 40px;
            background-color: #1CA1F2;
            color: #FFF;
            font-weight: 700;
            font-size: 15px;
            border: none;
         }

         .tweet-btn:hover {
            background-color: #1991DA;
         }

         .footer {
             float: right;
             margin-top: 10px;
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
        `}</style>
        </div>
    )
}

export default Compose