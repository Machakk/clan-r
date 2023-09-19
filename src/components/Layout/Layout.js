import { Outlet } from 'react-router-dom'
import Siderbar from '../Sidebar/Sidebar'
import './Layout.css'
import TopPlayers from '../Topplayers/TopPlayers'
import Clan from '../../pages/Clan/Clan'

const Layout = () => {
    return (
        <div>
            {/* <Siderbar />
            <Outlet /> */}
            {/* <TopPlayers /> */}
            <Clan />
        </div>
    )
}

export default Layout