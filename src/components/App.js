import React from "react";

const users = [
  { id: 1, name: "Sam Smith" },
  { id: 2, name: "Lisa More" },
  { id: 3, name: "David Cohen" },
  { id: 4, name: "Jim Taylor" },
];

class App extends React.Component {
  render() {
    return <div>
        <UserLi />
    </div>;
  }
}

export default App;