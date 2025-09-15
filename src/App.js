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
            <h1>xxx</h1>
            <Outlet></Outlet>
        </main>
    </>
}

const routes = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [{
            path: '',
            element: <h1>Home Page</h1>
        }, {
            path: 'todo',
            element: <h1>Todo List</h1>
        }, {
            path: 'about',
            element: <h1>About Us</h1>
        }]
    }
]

const router = createBrowserRouter(routes);

function App() {
    // the Hooks API manage component data state
    // const [todoItems, dispatch] = useReducer(todoReducer, todoInitialState);
    // const value = {todoItems, dispatch};

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
