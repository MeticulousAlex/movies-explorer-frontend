import './Portfolio.css';

function Portfolio(){
    return(
        <div className='portfolio__wrapper'>
            <h2 className='portfolio__header'>Портфолио</h2>
            <div className='portfolio__list'>
                <a className='portfolio__list-item' href='https://github.com/Sas-not-g/how-to-learn_v2' target='_blank' rel="noreferrer">
                    <p className='portfolio__item-text'>Статичный сайт</p>
                    <p className='portfolio__item-text'>&#8599;</p>
                </a>
                <a className='portfolio__list-item' href="https://github.com/Sas-not-g/russian-travel" target='_blank' rel="noreferrer">
                    <p className='portfolio__item-text'>Адаптивный сайт</p>
                    <p className='portfolio__item-text'>&#8599;</p>
                </a>
                <a className='portfolio__list-item' href='https://github.com/Sas-not-g/react-mesto-api-full-gha' target='_blank' rel="noreferrer">
                    <p className='portfolio__item-text'>Одностраничное приложение</p>
                    <p className='portfolio__item-text'>&#8599;</p>
                </a>
            </div>
        </div>
    )
}

export default Portfolio;