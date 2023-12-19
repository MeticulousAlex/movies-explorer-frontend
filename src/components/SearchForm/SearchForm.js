import './SearchForm.css';
import submitImage from '../../images/movie-submit.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm(){
    return(
            <form className='form__search'>
                <div className='form__input-section'>
                    <input className='form__search-input' placeholder='Фильм'/>
                    <button className='form__submit-button'>
                        <img src={submitImage} alt='submit-button'/>
                    </button>
                </div>
                <div className='form__filter'>
                    <FilterCheckbox/>
                    <p className='form__checkbox-caption'>Короткометражки</p>
                </div>
            </form>
    )
}

export default SearchForm;