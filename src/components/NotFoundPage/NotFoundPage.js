import React from 'react';
import './NotFoundPage.css';

function NotFoundPage({setNotFound}){

    function goBack(){
        setNotFound(false)
        window.history.back();
    }

    React.useEffect(() => {
     setNotFound(true);
    })

    return(
        <>
            <div className='not-found__container'>
                <p className='not-found__code'>404</p>
                <p className='not-found__message'>Страница не найдена</p>
                <p className='not-found__return-button' onClick={goBack}>Назад</p>
            </div>
        </>
    )
}

export default NotFoundPage;