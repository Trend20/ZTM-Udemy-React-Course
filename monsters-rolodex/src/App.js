import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: []
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
  
  render(){
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          className="search-box"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            let filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(
              () => {
                return { monsters: filteredMonsters };
              },
              () => {
                console.log(this.state.monsters);
              }
            );
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
