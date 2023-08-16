import { actionTypes } from "./actions";
const initialState = {
    tasks:[
        {   
            id: 1,
            name:"Hit the gym",
            checked:false
        },
        {
            id:2,
            name:"Pay bills",
            checked:false
        }
        ,{
            id:3,
            name:"Meet George",
            checked:false
        },
        {
            id:4,
            name:"Buy eggs",
            checked:false
        },
        {
            id:5,
            name:"Read a book",
            checked:false
        }],
}
const {add , remove} = actionTypes 

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case add:
            console.log("add reducer : ",action.payload)
            if (action.payload === "") {
                return state
            }
            return {
                ...state,tasks: [...state.tasks, {
                    id: state.tasks.length + 1,
                    name : action.payload,
                    checked:false
                }]
            }
        case remove:
            return {
                // ...state,tasks: [...state.tasks.filter(task => task.id !== action.payload)]
                ...state,tasks: [...state.tasks.filter(task => task.id !== action.payload).map(task => {
                    if(task.id > action.payload){
                        task.id = task.id - 1
                    }
                    return task
                })]
            }
        default:
            return state
    }
}