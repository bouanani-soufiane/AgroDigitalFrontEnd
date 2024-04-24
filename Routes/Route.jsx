import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Auth/Login";
import App from "../src/App";
import Program from "../src/pages/Program/Program";
import { Dashboard } from "../src/pages/Dashboard";
import Employee from "../src/pages/Employees/Employee";
import Task from "../src/pages/Tasks/Task";
import Product from "../src/pages/Products/Products";
import Maladie from "../src/pages/Maladies/Maladies";
import Traitement from "../src/pages/Traitement/Traitement";
import Profile from "../src/pages/Profile/Profile";
import Register from "../src/pages/Auth/Register";
import Report from "../src/pages/Report/Report";

const Router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/program',
                element: <Program />
            },
            {
                path: '/employees',
                element: <Employee />
            },
            {
                path: '/tasks',
                element: <Task />
            },
            {
                path: '/products',
                element: <Product />
            },
            {
                path: '/maladies',
                element: <Maladie />
            },
            {
                path: '/traitement',
                element: <Traitement />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/reports',
                element: <Report />
            }
        ]
    }



])


export default Router;


