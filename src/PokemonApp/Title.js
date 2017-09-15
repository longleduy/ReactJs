import React, { Component } from 'react'
import './stylesheet/title.css';

class Title extends Component{
    render(){
        return(
            <div>
                <h1 className='title'>{this.props.title}</h1>
            </div>
        )
    }
}
export default Title;