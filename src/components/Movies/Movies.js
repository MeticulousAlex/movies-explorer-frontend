import './Movies.css';
import films from '../../utils/films';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCards from '../MoviesCards/MoviesCards'

function Movies(props){
    return(
        <>
            <SearchForm/>
            <MoviesCards films={films} page={props.page}/>
        </>
    )
}

export default Movies;