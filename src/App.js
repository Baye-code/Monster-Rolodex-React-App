// import logo from './logo.svg';
import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);

  }
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response =>
              // console.log(response)
              response.json())
          // .then(users => console.log(users))
          .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    return (
        <div className="App">
          <h1> Monsters Rolodex </h1>
          {/*<input type='search' placeholder='search monsters' onChange={e => console.log(e.target.value)}/>*/}
          <SearchBox
            placeholder='search monsters'
            handleChange={this.handleChange}
          />
          {/*<CardList monsters={this.state.monsters}/>*/}
          <CardList monsters={filteredMonsters}/>
          {/*<header className="App-header">*/}
          {/*  <img src={logo} className="App-logo" alt="logo" />*/}
          {/*  <p>{this.state.string}</p>*/}
          {/*  <button onClick={() => this.setState({string: 'Hello S@ps'})}>Change Text</button>*/}
          {/*</header>*/}
        </div>
    );
  }
}

export default App;
