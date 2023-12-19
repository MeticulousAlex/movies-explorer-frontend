import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


function Login({props}){

    React.useEffect(() => {
        props.setIsAuthPage(true);
    }, [])

    return(
        <div className='auth-page'>
            <p className='auth-page__header'>Рады видеть!</p>
            <form className='auth-page__form'>
                <div className='auth-page__form-inputs_login'>
                    <label className='auth-page__input-label'>
                        <p className='auth-page__input-name'>E-mail</p>
                        <input className={props.emailError ? 'auth-page__input auth-page__input_wrong' : 'auth-page__input'} onChange={props.validateInputs} onBlur={props.toggleSubmitButton} type="email" name="email"/>
                        <span className='auth-page__input-error'>{props.emailError}</span>
                    </label>
                    <label className='auth-page__input-label'>
                        <p className='auth-page__input-name'>Пароль</p>
                        <input className={props.passwordError ? 'auth-page__input auth-page__input_wrong' : 'auth-page__input'} onChange={props.validateInputs} onBlur={props.toggleSubmitButton} type="password" name="password"/>
                        <span className='auth-page__input-error'>{props.passwordError}</span>
                    </label>
                </div>
                <p className={props.isServerErrorShown ? 'auth-page__submit-error' : 'auth-page__submit-error auth-page__submit-error_invisible'}>Ой. Серверная ошибка</p>
                <button className='auth-page__submit-button' type='submit' onClick={props.leaveAuthPage} disabled={!props.submitButtonStatus}>Войти</button>
            </form>
            <p className='auth-page__switch-auth'>Ещё не зарегистрированы? <Link className='auth-page__switch-auth-link' to='/signup' onClick={props.resetForm} >Регистрация</Link></p>
        </div>
    )
}

export default Login;