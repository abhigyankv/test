import React from "react";
import "./todo.css";

// -----Fucntion Based Component--------
// function TodoItems(props) {
//   return (
//     <div className="items">
//       <form action="" className="form"></form>
//       <input type="checkbox" id="item" /> {props.obj.Do}
//     </div>
//   );
// }

// ------Class based COmponent-------
export default class TodoItems extends React.Component {
  render() {
    const mystyle = {
      textDecoration: "line-through",
    };
    return (
      <div className="items">
        <form action="" className="form"></form>
        <input
          type="checkbox"
          id="item"
          onClick={() => this.props.handle(this.props.obj.key)}
          checked={this.props.obj.completed}
        />
        <p style={this.props.obj.completed ? mystyle : null}>
          {this.props.obj.Do}
        </p>
      </div>
    );
  }
}
