import React from "react";

const userresponse = localStorage.getItem("userresponse");
const AuthHeader = () => {
  const userObj = JSON.parse(userresponse);
   console.log('userObj',userObj);
  if (userObj && userObj.accessToken) {
    return { Authorization: "Bearer " + userObj.accessToken };
  }else{
    return {};
  }
};

export default AuthHeader;
