import './Sidebar.css';
import { Link } from 'react-router-dom';
const Siderbar = () => {
    return (
        <div className="sidebar">
            <Link className="logo" to="/"></Link>
        </div >
    );
}

export default Siderbar;