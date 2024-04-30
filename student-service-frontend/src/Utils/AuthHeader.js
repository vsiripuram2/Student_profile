import React from "react";

const jwtToken = localStorage.getItem("jwtToken");
const AuthHeader = () => {
  if (jwtToken) {
    return { Authorization: "Bearer " + jwtToken };
  }else{
    return {};
  }
};

export default AuthHeader;
