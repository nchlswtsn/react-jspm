import React from "react";
import PostList from "./PostList";
import data from "../../data";
console.log(data);

export default React.createClass({
  render: function(){
    return (
      <div>
        {this.props.posts.map(post => <Post {...post} />)}
      </div>
    )
  }
});
