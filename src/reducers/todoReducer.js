export const todoInitialState = [];

// reducer is a pure function that define and gather all state update logic
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add_todo':
            return [
                ...state, action.todo
            ];
        case 'load_todos':
            return action.todos
        case 'mark_as_done':
            return state.map(todo => {
                if (action.id === todo.id) {
                    const done = !todo.done;
                    return {...todo, done: done}
                }
                return todo
            })
        case 'update_todo_text':
            return state.map(todo => {
                if (action.id === todo.id) {
                    return {...todo, text: action.text};
                }
                return todo;
            })
        case 'delete_todo':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};
