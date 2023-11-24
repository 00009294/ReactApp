import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList=({data, onDelete, onToggleFavourite, onToggleLike})=>{
    return (
        <ul className='movie-list'>
            {data.map(item => (
                <MovieListItem key = {item.id} 
                name = {item.name} viewers ={item.viewers} 
                favourite = {item.favourite}
                like = {item.like}
                onDelete = {()=> onDelete(item.id)}
                onToggleFavourite = {id => onToggleFavourite(item.id)}
                onToggleLike = {id => onToggleLike(item.id)}
                />
        ))}
    </ul>
)}

export default MovieList