import './Footer.css';

function Footer({isAuthPage, isProfilePage, notFound}){
    if (isAuthPage || isProfilePage || notFound){
        return(null);
    } else {

    return(
        <div className='footer'>
            <p className='footer__collab'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__info-bar'>
                <p className='footer__date'>© 2023</p>
                <div className='footer__links'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/Sas-not-g'>Github</a>
                </div>
            </div>
        </div>
    )
    }
}

export default Footer;