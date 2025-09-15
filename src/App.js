import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {todoInitialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/todo'}>Todo List</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}

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
            path: 'todo',
            element: <TodoList/>
        }, {
            path: 'about',
            element: <h1>About Us</h1>
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
