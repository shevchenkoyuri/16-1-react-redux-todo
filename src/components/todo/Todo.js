import TodoList from "../todoList/TodoList";
import TodoForm from "../todoForm/TodoForm";
import './todo.css';

const Todo = () => {
    return (
        <div className="todo">
            <TodoList/>
            <TodoForm/>
        </div>
    )
}

export default Todo;