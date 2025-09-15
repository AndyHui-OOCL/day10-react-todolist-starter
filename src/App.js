import './App.css';
import TodoList from "./components/todo/TodoList";
import {createBrowserRouter, RouterProvider} from "react-router";
import {DefaultLayout} from "./_layout/DefaultLayout";
import FinishedTodoList from "./components/todo/FinishedTodoList";
import TodoItemDetail from "./components/todo/TodoItemDetail";
import Homepage from "./components/home/Homepage";
import AboutUs from "./components/about/AboutUs";

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
            element: <Homepage/>
        }, {
            path: 'todos',
            element: <TodoList/>,
        }, {
            path: '/todos/:id',
            element: <TodoItemDetail></TodoItemDetail>
        }, {
            path: 'about',
            element: <AboutUs/>
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
