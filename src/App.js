import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {DefaultLayout} from "./_layout/DefaultLayout";
import FinishedTodoList from "./components/FinishedTodoList";
import TodoItemDetail from "./components/TodoItemDetail";

function ErrorPage() {
    return <h1>Error Page</h1>;
}


const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [{
            path: '',
            element: <h1>Home Page</h1>
        }, {
            path: 'todos',
            element: <TodoList/>,
        }, {
            path: '/todos/:id',
            element: <TodoItemDetail></TodoItemDetail>
        }, {
            path: 'about',
            element: <h1>About Us</h1>
        }, {
            path: 'finished-todos',
            element: <FinishedTodoList/>
        }]
    }
]

const router = createBrowserRouter(routes);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
