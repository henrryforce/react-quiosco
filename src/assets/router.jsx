import { createBrowserRouter} from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'
import Layout from '../layout/Layout'
import Inicio from '../views/Inicio'
import Login from '../views/Login'
import Registro from '../views/Registro'
import Ordenes from '../views/Ordenes'
import Productos from '../views/Productos'
import Adminlayout from '../layout/Adminlayout'

const router = createBrowserRouter([
{
    path: '/',
    element: <Layout/>,
    children:[
        {
            index:true,
            element: <Inicio/>
        }
    ]
},
{
    path:'/auth',
    element: <AuthLayout/>,
    children:[{
        path:'/auth/login',
        element:<Login/>
    },
    {
        path:'/auth/registro',
        element:<Registro/>
    }
]
},
{
    path:'/admin',
    element:<Adminlayout/>,
    children:[{
        index:true,
        element:<Ordenes/>
    },
    ,
    {
        path:'/admin/productos',
        element:<Productos/>
    }]
}
])
export default router