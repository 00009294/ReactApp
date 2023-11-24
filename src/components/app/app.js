import "./app.css"
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import {Component} from 'react'

class App extends Component{ 
    constructor(props){
    super(props)
    this.state = {
    data:[      
        {name: 'Westminster', viewers: 710, favourite: false, id: 1},
        {name: 'INHA', viewers: 750, favourite: false, id: 2},
        {name: 'Webster', viewers: 310, favourite: true, id: 3},
        {name: 'Amity', viewers: 510, favourite: false, id: 4},
        {name: 'MDIS', viewers: 210, favourite: true, id: 5},
        {name: 'Westminster', viewers: 910, favourite: false, id: 6},
    ]}}

    onDelete = id => {
        this.setState (({data}) =>({
         data: data.filter(c=>c.id !== id),
        }))
    }
    
    onAdd = item => {
        this.setState(({data}) => ({
            data: [...data, { ...item}],
        }))
    }

    render(){
        const{data} = this.state
        return (
            <div className='app font-monospace'>
        <div className="content">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter />
            </div>
                <MovieList data = {data} onDelete={this.onDelete} />
                <MoviesAddForm addForm = {this.onAdd}/>
        </div>
    </div>
    )
}
}

export default App