import logoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import AccountTab from '../AccountTab/AccountTab';

import { Link } from 'react-router-dom';

function Header({isAuthPage, isAuthorizedUser, setIsProfilePage, isMenuOpened, toggleMenu, underlinedLink, setUnderlinedLink, notFound}){

    function toggleFooter(isFooter){
        setIsProfilePage(!isFooter);
    }  


    document.body.style.cssText = isMenuOpened ? 'position: fixed; overflow-y: scroll' : 'position: static; overflow-y: auto'; //to prevent scrolling when menu is present

    if (notFound){
        return(null);
    } else {
        console.log(isAuthorizedUser);
    return(
        <div className={isAuthPage ? 'header header_auth' : 'header'}>
             <Link to='/' className='header__logo' onClick={() => toggleFooter(true)}><img src = {logoPath} alt='logo'/></Link>
             <Navigation isAuth={isAuthPage} toggleFooter={toggleFooter} isAuthorizedUser={isAuthorizedUser} underlinedLink={underlinedLink} setUnderlinedLink={setUnderlinedLink}/>
             <AccountTab isAuthPage={isAuthPage} isAuthorizedUser={isAuthorizedUser} toggleFooter={toggleFooter} isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} setUnderlinedLink={setUnderlinedLink}/>
        </div>
    )
    }
}

export default Header