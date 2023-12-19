import './Profile.css';
import React from 'react';
import AccountTools from '../AccountTools/AccountTools';

function Profile({name, email, setIsProfilePage, setIsAuthorizedUser}){

    const [fieldMode, setFieldMode] = React.useState(true);
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [userName, setUserName] = React.useState(name)
    const [newUserName, setNewUserName] = React.useState(name);
    const [userEmail, setUserEmail] = React.useState(email || 'email@email.com')
    const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true)
    const [isErrorShown, setIsErrorShown] = React.useState(false)


    function handleSubmit(e){
        e.preventDefault();
        toggleEdit(false);
        setUserName()
    }

    function toggleEdit(edit){
        setIsEditMode(edit);
        setFieldMode(!edit);
        setIsSubmitDisabled(!edit);
    }

    function handleInputChange(e){
        e.target.name === 'name' ? setNewUserName(e.target.value) : setUserEmail(e.target.value);
        setIsSubmitDisabled(true);
        setIsErrorShown(true);
    }

    React.useEffect(() => {
        setIsProfilePage(true);
    })

    return(
        <div className='profile'>
            <h2 className='profile__greeting'>Привет, {userName || 'user'}!</h2>
            <form className='profile__form' onSubmit={handleSubmit}>
                <fieldset className='profile__form-field' disabled={fieldMode}>
                    <label className='profile__input-row'>
                        <p className='profile__input-name'>Имя</p>
                        <input name='name' className='profile__input' onChange={handleInputChange} value={newUserName || ''} maxLength='15'/>
                    </label>
                    <label className='profile__input-row'>
                        <p className='profile__input-name'>Email</p>
                        <input name='email' className='profile__input' onChange={handleInputChange} value={userEmail || ''}/>
                    </label>
                </fieldset>
                <p className={isErrorShown ? 'profile__submit-error' : 'profile__submit-error profile__submit-error_invisible'}>При обновлении профиля произошла ошибка.</p>
                <button 
                    className={isEditMode ? 'profile__form-submit-button' : 'profile__form-submit-button profile__form-submit-button_invisible'} 
                    type="submit" 
                    disabled={isSubmitDisabled || false}>
                    Сохранить
                </button>
            </form>
            <AccountTools isEditMode={isEditMode} toggleEdit={toggleEdit} setIsProfilePage={setIsProfilePage} setIsAuthorizedUser={setIsAuthorizedUser}/>
        </div>
    )
}


export default Profile;