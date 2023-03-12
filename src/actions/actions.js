//Классический экшн-креатор, который возвращает объект
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};
//Экшн-креатор в виде функции, который возвращает функцию - для корректной работы такого креатора store.dispatch должен быть дополнен Мидлвейрами, осуществляющими обработку функций
export const deleteTodo = (todo) => (dispatch) => {
    dispatch({
        type: 'DELETE_TODO',
        payload: todo
    });
};