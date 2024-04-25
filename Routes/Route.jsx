import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Auth/Login";
import App from "../src/App";
import Program from "../src/pages/Program/Program";
import { Dashboard } from "../src/pages/Dashboard";
import Employee from "../src/pages/Employees/Employee";
import Task from "../src/pages/Tasks/Task";
import Product from "../src/pages/Products/Products";
import Maladie from "../src/pages/Maladies/Maladies";
import Profile from "../src/pages/Profile/Profile";
import Register from "../src/pages/Auth/Register";
import Report from "../src/pages/Report/Report";

import ProtectedRoute from '../src/utilities/PrivateRoutes';

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
                element: <ProtectedRoute component={ Program } roles={ ['Gerant'] } />
            },
            {
                path: '/employees',
                element: <ProtectedRoute component={ Employee } roles={ ['Gerant'] } />

            },
            {
                path: '/tasks',
                element: <ProtectedRoute component={ Task } roles={ ['Gerant'] } />

            },
            {
                path: '/products',
                element: <ProtectedRoute component={ Product } roles={ ['Magazinier'] } />
            },
            {
                path: '/maladies',
                element: <Maladie />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/reports',
                element: <ProtectedRoute component={ Report } roles={ ['Gerant'] } />

            }
        ]
    }



])


export default Router;


