import React from "react";

function App() {
  setInterval(gettime, 1000);
  let now = new Date().toLocaleTimeString([], {hour12: false });

  const [current_time, getTime] = React.useState(now);

  function gettime() {
    let time = new Date().toLocaleTimeString([], {hour12: false });
    getTime(time);
  }

  return (
    <div className="container">
      <h1> {current_time} </h1>
    </div>
  );
}

export default App;
