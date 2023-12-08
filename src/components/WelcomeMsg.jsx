import React from "react";

export default function WelcomeMsg({ handleOnClick }) {
  return (
    <center>
      <h1 style={{ marginTop: "100px" }}>There are no Posts</h1>
      {/* <button type="button" className="btn btn-primary" onClick={handleOnClick}>
        Fetch Post from Server
      </button> */}
    </center>
  );
}
