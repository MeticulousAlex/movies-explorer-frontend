import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({isAuth, toggleFooter, isAuthorizedUser, underlinedLink, setUnderlinedLink}){

    function handelForward(e){
        toggleFooter(true)
        setUnderlinedLink(e.target.classList[1].split('_')[3]);
    }

    if (isAuth || !isAuthorizedUser){
        return(null);
    } else {

    return(
        <nav className='navigation-bar'>
            <Link to='/movies' className={underlinedLink === 'movies' ? 'navigation-bar__link navigation-bar__link_movies navigation-bar__link_underlined' : 'navigation-bar__link navigation-bar__link_movies'} onClick={handelForward}>Фильмы</Link>
            <Link to='/saved-movies' className={underlinedLink === 'saved' ? 'navigation-bar__link navigation-bar__link_saved navigation-bar__link_underlined' : 'navigation-bar__link navigation-bar__link_saved'} onClick={handelForward}>Сохранённые фильмы</Link>
        </nav>
    )
    }
}

export default Navigation;