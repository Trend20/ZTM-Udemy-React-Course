import { Component } from "react";

class CardList extends Component{

  constructor(){
    super();

    this.state={}
  }

  render(){
    const { monsters } = this.props;
    return(
      <div className="card-list">
        {
          monsters.map(monster =>(
            <div className="card-container" key={monster.id}>
              <img src={`https://robohash.org/${monster.id}?set=set2`} alt="monster" />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CardList;