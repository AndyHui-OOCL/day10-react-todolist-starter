export const todoInitialState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: false},
];

// reducer is a pure function that define and gather all state update logic
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'mark_as_done':
            return state.map(todo => {
                if(action.id === todo.id) {
                    const done = !todo.done;
                    return {...todo, done: done}
                }
                return todo
            })
        default:
            return state;
    }
};
