import { Outlet } from 'react-router-dom'
import Siderbar from '../Sidebar/Sidebar'
import './Layout.css'

const Layout = () => {
    return (
        <div>
            <Siderbar />
            <Outlet />
        </div>
    )
}

export default Layout