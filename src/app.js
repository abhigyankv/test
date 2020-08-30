import React from "react";
import TodoItems from "./todoitems.js";
import { Navbar } from "./navbar";
import "./todo.css";
import arr from "./data";

// const store = arr.map((i) => <TodoItems key={i} obj={i} />);
// function App() {
//   return (
//     <div className="main">
//       <Navbar />
//       {store}
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: arr,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(key) {
    this.setState((prev) => {
      const updated = prev.todos.map((i) => {
        if (i.key === key) {
          i.completed = !i.completed;
        }
        return i;
      });
      return {
        todos: updated,
      };
    });
  }

  render() {
    const store = this.state.todos.map((i) => (
      <TodoItems key={i.key} obj={i} handle={this.handleChange} />
    ));
    return (
      <div className="main">
        <Navbar />
        {store}
      </div>
    );
  }
}
export { App };
