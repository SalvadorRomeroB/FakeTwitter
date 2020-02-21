import axios from "axios";

//UPDATE MAIN TWEETS
export const updateMessagerReq = (input, id) => {
  axios({
    method: "put",
    url: "twitter/update/tweet",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      content: input,
      tweet_id: id
    }
  });
};

//UPDATE REPLYS
export const updateReplyReq = (input, id) => {
  axios({
    method: "put",
    url: "/twitter/update/reply",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      content: input,
      tweet_id: id
    }
  });
};
