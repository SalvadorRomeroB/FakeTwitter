import React, { useState } from 'react';

const Reply = (props) => {

    function getPp() {
        if (props.username == 'klauskie') {
            return "https://i.kym-cdn.com/photos/images/newsfeed/001/700/569/1c4.jpg"
        } else {
            return "https://i.pinimg.com/originals/8e/fb/05/8efb05db4589b84459e22257b4e06e03.jpg";
        }
    }

    return (
        <div className="box">
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
                        <span className="content font">{props.content}</span>
                    </div>
                </div>
            </div>


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

            .vertical-line {
                border-right: rgb(61, 84, 102) 2px solid;
                height: 30px;
                width: 1px;
                margin: 4px 0 8px 22px;
            }
        `}</style>
        </div>
    )
}

export default Reply