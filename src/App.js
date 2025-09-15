import './App.css';
import TodoList from "./components/TodoList";
import {createBrowserRouter, RouterProvider, useParams} from "react-router";
import {DefaultLayout} from "./_layout/DefaultLayout";

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
