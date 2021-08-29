import React from 'react'
import {TodoItem} from "./TodoItem"
export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            {/* <h4 className="text-center ">Todos list</h4>
            <hr/> */}
            <h3>Todo List 🙂 </h3>
            <div className="text-center text-white">
            {props.todos.length===0?  "No Todos to display 🔥 "    : 
            props.todos.map((todo)=>{
                return(
                <TodoItem todo={todo}  key={todo.sno} onDelete={props.onDelete}/>
                )
            })}
                </div>
        </div>
    )
}

