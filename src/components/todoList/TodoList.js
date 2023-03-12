import { useSelector, useDispatch } from "react-redux";

// import store from "../../store/store";
import { addTodo } from "../../actions/actions";

import './todoList.css';


// const {dispatch, getState} = store;


const TodoList = () => {
    const tasks = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();
    console.log('render TodoList');

    return (
        <div className="todo-list">
            <h2>Todo List. Tasks: {tasks.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th className="number">№</th>
                        <th className="subject">Описание задачи</th>
                        <th className="date">Срок выполнения</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((item, i) => (
                        <tr>
                            <td className="col col-1">{item.number}</td>
                            <td className="col col-2">{item.subject}</td>
                            <td className="col col-3">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;