import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => this.setState(() =>{
            return {monsters: users}
          },
          () =>{
            console.log(this.state.monsters);
          }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {
        console.log(this.state.monsters);
      }
    );
  }
  
  render(){
    // destructure state and the search method
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;

    let filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          className="search-box"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
