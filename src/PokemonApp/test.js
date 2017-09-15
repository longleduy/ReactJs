import React, { Component } from 'react'
import './stylesheet/search.css';
class Parent extends Component {
    constructor(props) {
        super(props);
    }
    onAdd2 = ()=>{
        this.refs.child.refs.child1.style.borderColor="red";
    }
    render() {
        return (
            <div>
                <Child onAdd2={this.onAdd2} ref="child"/>
                <input type="hidden" onClick={this.oncl} value="Parent" />
                <input type='hidden' placeholder='This is parent textbox' ref='parent1'   />

            </div>
        )
    }
}
class Child extends Component {
    constructor(props) {
        super(props);
    }
    onAdd =()=>{
        this.props.onAdd2();
    }
    render() {
        return (
            <div>
                
                    <h1>Im Child</h1>
                    
                    <input type='text' placeholder='1' ref='child1'   />
                    <input type='text' placeholder='3' ref='child3'   />
                    
                    <input type='button'  value='Add' onClick={this.onAdd} />;
                   
                
            </div>
        )
    }
}
export{Parent};