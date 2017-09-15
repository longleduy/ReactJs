import React, { Component } from 'react'
import './stylesheet/search.css';
class Search extends Component {
    constructor(props) {
        super(props);
    }
    onSearch = (e) => {
        this.props.filter(e.target.value);
    }
    onAdd = ()=>{
        this.props.add();
    }
    render() {
        return (
            <div>
                <div className='search'>
                    <input type='text' placeholder='Type name of pokemon' ref='search' onChange={this.onSearch}  />
                    <div style={{display:'none'}} ref='addDiv'>
                    {/* <input type='text' placeholder='Type name of pokemon want to add new' id='add'   /> */}
                    <input type='button'  value='Add' onClick={this.onAdd} />;
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;