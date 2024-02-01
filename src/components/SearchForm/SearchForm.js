import './SearchForm.css';
import React from 'react';
import submitImage from '../../images/movie-submit.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({searchMovies, page, updateSavedMovies, isLikedListChanged, setIsLikedListChanged}){

    const [formValue, setFormValue] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [areFormValuesSet, setAreFormValuesSet] = React.useState(false);

    function handleChange(e){
        setFormValue(e.target.value);
    }

    function handleSubmit(e){
        if (e){
            e.preventDefault();
            searchMovies(formValue, isShort, page, true, setAreFormValuesSet);
        } else {
            searchMovies(formValue, isShort, page);
        }
        if (page === 'search'){
            localStorage.setItem('request', formValue);
            localStorage.setItem('isShort', isShort);
        }
    }

    // React.useEffect(() => {
    //     setIsResultShown(false);
    // },[formValue])

    React.useEffect(()=>{
        if (areFormValuesSet || page === 'saved'){
            handleSubmit()
            if (isLikedListChanged){
                updateSavedMovies(isShort);
                setIsLikedListChanged(false);
            }
        }
    },[isShort])

    React.useEffect(() => {
        if (page === 'search'){
            const preloadedRequest = localStorage.getItem('request');
            const preloadedIsShort = localStorage.getItem('isShort');
            if (preloadedRequest && preloadedIsShort){
                setFormValue(preloadedRequest);
                setIsShort(preloadedIsShort === 'true' ? true : false);
                setAreFormValuesSet(true);
            }
        } else if (page === 'saved'){
            setFormValue('');
            setIsShort(false);
        }


    }, [page])

    return(
        <section className='form__wrapper'>
            <form className='form__search' onSubmit={handleSubmit}>
                <div className='form__input-section'>
                    <input className='form__search-input' placeholder='Фильм' onChange={handleChange} value={formValue || ''} required/>
                    <button className='form__submit-button' type='submit'>
                        <img src={submitImage} alt='submit-button'/>
                    </button>
                </div>
                <div className='form__filter'>
                    <FilterCheckbox isShort={isShort} setIsShort={setIsShort}/>
                    <p className='form__checkbox-caption'>Короткометражки</p>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;