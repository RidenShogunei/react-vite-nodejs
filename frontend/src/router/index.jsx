import { Navigate } from 'react-router-dom'
import Login from '../page/login/index'
import Main from '../page/main/index'
import Register from '../page/register/index'

export const globalRouters = [
    {
        path: '/',
        element: <Login />, // 默认路由
    },
    {
        path: '/main',
        element: <Main />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]