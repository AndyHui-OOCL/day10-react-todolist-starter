import axios from "axios";

const instance = axios.create({
        baseURL: "https://68c78c8d5d8d9f5147322294.mockapi.io/api/v1/",
});

export async function getTodos(){
    return await instance.get('/todos');
}

export async function addTodos(todo) {
    return await instance.post('/todos', todo);
}

export async function updateTodoById(id) {
    return await instance.put(`/todos/${id}`)
}

export async function deleteTodoById(id) {
    return await instance.delete(`/todos${id}`)
}