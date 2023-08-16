import React from 'react';
import "./Tasks.css";
import { connect } from 'react-redux';
import { Remove } from '../actions';

class Tasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:this.props.tasks
        }
    }


    componentDidUpdate(prevProps){
        if (prevProps.tasks != this.props.tasks){
        this.setState({tasks : this.props.tasks},() => {
            console.log("State : ",this.state.tasks)
        })
        console.log("Props : ",this.props.tasks)
        }
        
    }

    remove (id){
        console.log("remove this item : ",id)
        this.props.removeTask(id);
    }

    checked(id){
        let bol = this.state.tasks.find(task => task.id === id).checked
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id == id)
                    task.checked = !bol
                return task
            })
        })
        
        // this.setState({tasks,this.props.tasks})
    }
    render(){
        return (
            <div>
                
                <ul id="myUL">
                    {
                    this.state.tasks.map(task => {
                        return <li className={task.checked ? "checked" : "" } key={task.id}><span  onClick={() => this.checked(task.id)}>{task.name}</span><span onClick={() => this.remove(task.id)} style={{'float':'right','padding': '10'}}>x</span></li>})
                    }
                </ul>
    
                {/* <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label><br/>

                <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off"/>
                <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label><br/>

                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked />
                <label class="btn btn-outline-success" for="success-outlined">Checked success radio</label>

                <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
                <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label> */}
        </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchtoProps = (dispatch)=>{
    return {
        removeTask:(payload)=>dispatch(Remove(payload)),
    }
}

export default connect (mapStatetoProps,mapDispatchtoProps)(Tasks);