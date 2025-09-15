import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";

function DefaultLayout() {
    return <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/todos'}>Todo List</NavLink></li>
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

function TodoDetail() {
    const {id} = useParams();
    return <h1>
        This is: {id} detail
    </h1>;
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
            element: <TodoDetail></TodoDetail>
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
