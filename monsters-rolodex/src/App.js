import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

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
      <div className="app">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
