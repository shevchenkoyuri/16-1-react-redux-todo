import { useState } from "react";

import store from "../../store/store";
import { addTodo, deleteTodo } from "../../actions/actions";

import './todoForm.css';



const TodoForm = () => {
    const [task, setTask] = useState({
        subject: '',
        date: null
    });
    const [error, setError] = useState('');

    const {dispatch, getState} = store;
    const tasks = getState().rootReducer;

    const addTask = (e) => {
        e.preventDefault();
        if (task.subject) {
            dispatch(addTodo({
                number: tasks.length ? tasks[tasks.length-1].number + 1 : 1,
                ...task
            }));
            setTask({
                subject: '',
                date: null
            });
        }
        else {
            setError('Заполните поле ввода');
        }
    }

const onChangeText = (e) => {
    setError('');
    setTask({
        subject: e.target.value,
        date: null
    });
}

    return (
        <form className="todo-form">
            <h2>Todo Form</h2>
            <label htmlFor="task">task</label>
            <input
                required 
                type="text"
                id="task"
                name="task"
                value={task.subject}
                onChange={onChangeText} />
            {error ? <div className="error">{error}</div> : null}
            <button 
                onClick={addTask}>Add task</button>
        </form>
    )
}

export default TodoForm;