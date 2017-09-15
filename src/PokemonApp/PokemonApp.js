import React, { Component } from 'react'
import Search from './Search';
import Title from './Title';
import List from './List';
import './stylesheet/pokemon.css';

class PokemonApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: this.props.pokedex,
            result: '',
            keyword: ''
        }
    }
    onView = (word) => {
        let newWord = this.props.pokedex.filter(data => data.indexOf(word) > -1);
        if (word.substr(0, 1) != '$') {
            this.refs.search.refs.search.setAttribute("style", "color:black");
            this.refs.search.refs.addDiv.style.display = 'none';
            this.setState({ pokedex: newWord, result: newWord.length, keyword: word });
            if ((word == '') || (word == null)) {
                this.refs.result.style.display = 'none';
            }
            else {

                this.refs.result.style.display = 'block';
            }
        }
        else {
            this.refs.search.refs.search.setAttribute("style", "color:red");
            this.refs.search.refs.addDiv.style.display = 'block';    
        }
    }
    onAdd2 = () => {
        var add = this.refs.search.refs.search.value.toLowerCase();
        add.toLowerCase();
        var arrResult=(add.substr(5)).split(',');
        for(var i=0;i<arrResult.length;i++){
            this.state.pokedex.unshift(arrResult[i]);
        }
        //var newPokedex = arrResult.concat(this.state.pokedex);
        //this.state.pokedex.unshift(add.substr(1));
        this.setState({ pokedex: this.state.pokedex });
        console.log(this.state.pokedex);
        this.refs.search.refs.search.value = '$';

        this.refs.search.refs.search.focus();
    }
    onDel2 = (index) => {
        this.state.pokedex.splice(index, 1);
        this.setState({ pokedex: this.state.pokedex });
        console.log(index);
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <Title title='PokemonApp' ref="title" />
                    <Search filter={this.onView} add={this.onAdd2} ref="search" />
                    <h2 ref='result' className='result' style={{ display: 'none' }}>Keyword: <span style={{ marginRight: 50 }}>{this.state.keyword}</span>Result: <span>{this.state.result}</span></h2>
                    <section className='content'>
                        {this.state.pokedex.map((data, key) =>

                            <List ref="list" del={this.onDel2} name={data} key={key} index={key} onDel={this.onDel2} />

                        )}
                    </section>
                </div>
            </div>
        )
    }
}
export { PokemonApp };