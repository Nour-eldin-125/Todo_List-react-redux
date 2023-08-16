import "./Tasks.css";
import React from "react";
import { connect } from "react-redux";
import { Add, Remove } from "../actions";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     console.log(this.state.task);
    // }

    add = () => {
        this.input = document.getElementById("myInput");
        console.log("Input value : ",this.input.value);
        this.props.addTask(this.input.value);
        this.input.value = "";
    }

    render() {
        return (
            <div id="myDIV" className="header">
                <h1>My To Do List</h1>
                <br/>
                <input type="text" id="myInput" placeholder="Title..."/>
                <span onClick={this.add} className="addBtn">Add</span>
            </div>
        );
    }
}
// mapStateToProps = (state) => {
//     return {
//         tasks: state.tasks
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (payload) => dispatch(Add(payload))
    }
}
export default connect (null, mapDispatchToProps)(AddTask);