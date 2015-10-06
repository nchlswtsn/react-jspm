import React from "react";
import Post from "./Post";

export default React.createClass({
  render: function(){
    let answer = 42;
    return (
      <div>
        Something cool here...
        {" Hello " + answer}
        <Post />
      </div>
    )
  }
});
