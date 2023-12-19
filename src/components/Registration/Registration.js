import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

function Registration({props}){

    React.useEffect(() => {
        props.setIsAuthPage(true);
    }, [])

    return(
        <div className='auth-page'>
            <p className='auth-page__header'>Добро пожаловать!</p>
            <form className='auth-page__form'>
                <div className='auth-page__form-inputs_register'>
                    <label className='auth-page__input-label'>
                        <p className='auth-page__input-name'>Имя</p>
                        <input className={props.nameError ? 'auth-page__input auth-page__input_wrong' : 'auth-page__input'} onChange={props.validateInputs} type="text" name="name"/>
                        <span className='auth-page__input-error name-error'>{props.nameError}</span>
                    </label>
                    <label className='auth-page__input-label'>
                        <p className='auth-page__input-name'>E-mail</p>
                        <input className={props.emailError ? 'auth-page__input auth-page__input_wrong' : 'auth-page__input'} onChange={props.validateInputs} type="text" name="email"/>
                        <span className='auth-page__input-error email-error'>{props.emailError}</span>
                    </label>
                    <label className='auth-page__input-label'>
                        <p className='auth-page__input-name'>Пароль</p>
                        <input className={props.passwordError ? 'auth-page__input auth-page__input_wrong' : 'auth-page__input'} onChange={props.validateInputs} type="password" name="password"/>
                        <span className='auth-page__input-error email-error'>{props.passwordError}</span>
                    </label>
                </div>
                <p className={props.isServerErrorShown ? 'auth-page__submit-error' : 'auth-page__submit-error auth-page__submit-error_invisible'}>Ой. Серверная ошибка</p>
                <button className='auth-page__submit-button' disabled={!props.submitButtonStatus} onClick={props.leaveAuthPage}>Зарегистрироваться</button>
            </form>
            <p className='auth-page__switch-auth'>Уже зарегистрированы? <Link className='auth-page__switch-auth-link' to='/signin' onClick={props.resetForm}>Войти</Link></p>
        </div>
    )
}

export default Registration;
