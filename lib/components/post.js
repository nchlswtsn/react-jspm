import React from "react";
import fs from "fs";

export default React.createClass({
  render: function(){
    let data = fs.readFile('./data', function (err, data) {
      if (err) throw err;
      console.log(data);
    });
    return (
      <div>
        <h1>Title:&nbsp;</h1>
        <h4>{data.posts.title}</h4>

        <h2>Body:&nbsp;</h2>
        <h4>{data.posts.body}</h4>

        <h2>Date:&nbsp;</h2>
        <h4>{data.posts.date}</h4>
      </div>
    )
  }
});
