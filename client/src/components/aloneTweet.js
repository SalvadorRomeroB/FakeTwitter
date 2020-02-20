import React, { useState } from 'react';
import Compose from './compose.js'

const AloneTweet = (props) => {

    const [flag, setFlag] = useState(false)

    function getPp() {
        if (props.username == 'klauskie') {
            return "https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg"
        } else {
            return "https://i.pinimg.com/originals/8e/fb/05/8efb05db4589b84459e22257b4e06e03.jpg";
        }
    }

    function popUpReply() {
        console.log("edit time")
        setFlag(!flag)
    }

    return (
        <div className="box">
            <div className="row">
                <div className="col-2-custom">
                    <img className="picture" src={getPp()} />
                </div>
                <div className="col-10">
                    <div>
                        <span className="name-p font">{props.name}</span>
                        <br />
                        <span className="username-p font">@{props.username}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="content-box-p">
                        <span className="content-p font">{props.content}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="line-bar"></div>
            </div>
            <div className="row">
                <div className="col-2-custom"></div>
                <div className="col-10">
                    <div className="bottom-bar-p">
                        <a onClick={() => popUpReply()}>
                            <svg viewBox="0 0 24 24">
                                <g>
                                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {flag ? <Compose
                key={props.id}
                id={props.id}
                content={props.content}
                username={props.username}
                name={props.name}
            /> : null}




            <style jsx>{`
           .content-p {
               color: #FFF;
               text-decoration: none;
               font-weight: 500;
               font-size: 30px;
           }
           .username-p {
                color: #8394A0;
                text-decoration: none;
                padding: none;
                font-size: 18px;
           }
           .name-p {
             color: #FFF;
             text-decoration: none;
             line-height: 1.3125;
             font-weight: 900;
             font-size: 18px;
           }

           .picture {
               width: 50px;
               height: 50px;
               border-radius: 50%;
               margin: 0 auto;
           }

           .line-bar {
               padding: 5px 0 5px 0;
               border-bottom: rgb(56, 68, 77) 1px solid;
               width: 100%;
           }

           .content-box-p {
                margin: 15px 0 15px 10px;
           }

           .bottom-bar-p {
               margin-top: 10px;
               max-height: 30px;
               color: #c4cdd4;
           }
           .bottom-bar-p svg {
                max-width: 25px;
                fill: #c4cdd4;
            }
        `}</style>
        </div>
    )
}

export default AloneTweet