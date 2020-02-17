import React, {useState} from 'react';

const Tweet = (props) => {

    function getPp() {
        if (props.username == 'klauskie') {
            return "https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg"
        } else {
            return "https://i.pinimg.com/originals/8e/fb/05/8efb05db4589b84459e22257b4e06e03.jpg";
        }
    }

  return (
    <div className="box">
        <a className="row" href={`twitter/${props.id}`}>
            <div className="col-2-custom">
                <img className="picture" src={getPp()} />
            </div>
            <div className="col-10">
                <div>
                    <span className="name font">{props.name}</span>
                    <span className="username font">@{props.username}</span>
                </div>
                <div className="content-box">
                    <span className="content font">{props.content}</span>
                </div>
                <div className="bottom-bar">
                    <svg viewBox="0 0 24 24">
                        <g>
                        <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </a>
        
        
        
        

      <style jsx>{`
           .content {
               color: #FFF;
               text-decoration: none;
               font-weight: 500;
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

           .box a {
                height: 100%;
                width: 100%;
                text-decoration: none;
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
        `}</style>
    </div>
  )
}

export default Tweet