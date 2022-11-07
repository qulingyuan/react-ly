import React from "react";

export default class AppClass extends React.Component {
  render() {
    return <p>KaSong</p>;
  }
}
console.log("这是ClassComponent：", AppClass);
console.log("这是Element：", <AppClass />);

// function AppFunc() {
//   return <p>KaSong</p>;
// }
// console.log("这是FunctionComponent：", AppFunc);
// console.log("这是Element：", <AppFunc />);
