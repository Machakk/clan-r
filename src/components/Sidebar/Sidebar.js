import './Sidebar.css';
import { Link } from 'react-router-dom';
import LogoRemove from './../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import free brands 
import { f08, faAmericanSignLanguageInterpreting, faWon } from '@fortawesome/free-solid-svg-icons';
import { faContactCard, faHome, faPersonMilitaryToPerson } from '@fortawesome/free-solid-svg-icons';

const Siderbar = () => {
    return (
        <div className="sidebar">
            <Link className="logo" to="/">
                <img src={LogoRemove} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#fff">Home Clan</FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="players-link" to="/players">
                    <FontAwesomeIcon icon={faPersonMilitaryToPerson} color="#fff">Players</FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faContactCard} color="#fff">Contact</FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a>
                        <FontAwesomeIcon icon={faWon} color="#fff" />
                    </a>
                </li>
            </ul>
        </div >
    );
}

export default Siderbar;