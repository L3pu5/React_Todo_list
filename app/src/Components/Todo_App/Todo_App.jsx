import { useState } from "react"
import Todo_Adder from "../Todo_Adder/Todo_Adder"
import Todo_List from "../Todo_List/Todo_List"

export default function Todo_App () {
    const [todos, setTodos] = useState([]);

    function add_new_Todo (newTodo) {
        setTodos(old => [...old, newTodo ])
    }

    function remove_Todo (name) {
        setTodos(todos.filter(item => item.name !== name))
    }
    
    return <>
        <Todo_Adder adder={add_new_Todo}></Todo_Adder>
        <Todo_List todos={todos}></Todo_List>
    </>
}