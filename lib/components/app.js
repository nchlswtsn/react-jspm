import React from "react";

export default React.createClass({
  render: function(){
    let answer = 42;
    return (
      <div>
        Something cool here...
        {" Hello " + answer}
      </div>
    )
  }
});
