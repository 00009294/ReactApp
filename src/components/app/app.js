import "./app.css"
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'


class App extends Component{ 
    constructor(props){
    super(props)
    this.state = {
    data:[      
        {name: 'Westminster', viewers: 710, favourite: false, like: false, id: 1},
        {name: 'INHA', viewers: 750, favourite: false, like: false, id: 2},
        {name: 'Webster', viewers: 310, favourite: true, like: false, id: 3},
        {name: 'Amity', viewers: 510, favourite: false, like: false, id: 4},
        {name: 'MDIS', viewers: 210, favourite: true, like: false, id: 5},
        {name: 'Westminster', viewers: 910, favourite: false, like: false, id: 6},
    ]}}

    onDelete = id => {
        this.setState (({data}) =>({
         data: data.filter(c=>c.id !== id),
        }))
    }
    
    onAdd = item => {
        const newArray = {name: this.state.name, viewers: this.state.views, id: uuidv4(), favourite: false, like: false}
        this.setState(({data}) => ({
            data: [...data, item],
        }))
    }

    onToggleFavourite = id => {
        this.setState(({data}) => {
            const newArray = data.map(item => {
                if(item.id === id){
                    return {...item, favourite: !item.favourite}
                }
                return item
            })
            console.log(newArray)
        })
    }

    onToggleLike = id => {
        console.log(`Like ${id}`)
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
                <MovieList data = {data} onDelete={this.onDelete} onToggleFavourite = {this.onToggleFavourite} onToggleLike = {this.onToggleLike}/>
                <MoviesAddForm addForm = {this.onAdd} />
        </div>
    </div>
    )
}
}

export default App