import {Component} from 'react'
import './movies-add-form.css'
import {v4 as uuidv4} from 'uuid'

class MoviesAddForm extends Component{
constructor(props){
    super(props) 
    this.state = {
        name: '+998 ',
        views: '',
        }
    }

changeHandlerInput = e =>{
    this.setState({
        [e.target.name]: e.target.value,
        })
    }
onAddHandler = e =>{
    e.preventDefault();
    this.props.addForm({name: this.state.name, viewers: this.state.views, id: uuidv4() })
    this.setState({
        name: '',
        views: '',
    })
}
    render(){
        const {name, views } = this.state
        
        return (
            <div className='movies-add-form'>
            <h3>Add new movie</h3>
            <form className='add-form d-flex' onSubmit={this.onAddHandler}>

                <input type="text" className='form-control new-post-label' 
                    placeholder='What kind of movie u want to add?' onChange={this.changeHandlerInput} 
                        name = 'name' value={name}></input>

                <input type='number' className='form-control new-post-label' 
                    plasholder='Rate it' onChange={this.changeHandlerInput} 
                        name='views' value={views}></input>

                <button type='submit' className='btn btn-outline-dark' > Add</button>
            </form>
        </div>
    )}


}

export default MoviesAddForm