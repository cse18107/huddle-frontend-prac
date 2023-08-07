import './Header.css';
import Logo from '../images/logo.svg';
const Header = () => {
    return <>
        <div className="header_container">
            <div className="header_content">
                <div className="header_left">
                    <img src={Logo}/>
                </div>
                <div className="header_right">
                    <button className='header_button'>Try it free</button>
                </div>
            </div>
        </div>
    </>
}

export default Header;