import './movies-add-form.css'

const MoviesAddForm = () =>{
    return <div className='movies-add-form'>
        <input type="text" className='form-control new-post-label' placeholder='What kind of movie u want to add?'></input>
        <input type='number' className='form-control new-post-label' plasholder='Rate it'></input>
        <button type='submit' className='btn btn-outline-dark' > Add</button>
    </div>
}

export default MoviesAddForm