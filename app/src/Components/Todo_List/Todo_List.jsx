import Todo from "../Todo_Element/Todo.jsx";

export default function Todo_List (props) {
    return <>
        <h1>Todo List</h1>
        <hr></hr>
        {props.todos.map(todo => <Todo name={todo}></Todo>)}
    </>
}