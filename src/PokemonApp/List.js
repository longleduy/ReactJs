import React, { Component } from 'react'
import './stylesheet/list.css';
export default class List extends Component {
    constructor(props) {
        super(props);

    }
    onDel = () => {
        this.props.del(this.props.index);
    }
    render() {
        return (
            <div className='list'>
                <input type='button' ref='del' className="btndel"   value='Delete' onClick={this.onDel} />
                <div>
                <h3 id='namepoke'>{this.props.name}</h3>
                <img src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`} />
                
                </div>
                
            </div>
        )
    }

}