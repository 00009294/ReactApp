import './app-filter.css'

const AppFilter =()=>{
    return ( 
        <div className="btn-group">
            <div className="btn btn-dark" type="button">Most watched</div>
            <div className="btn btn-outline-dark" type="button">Most liked</div>
            <div className="btn btn-outline-dark" type="button">Most recent</div>
        </div>
    )
}

export default AppFilter