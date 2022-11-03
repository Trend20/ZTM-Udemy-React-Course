import { Component } from "react";
import './card-list.css';

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
          monsters.map(monster =>{
            const { name, id, email} = monster;
            return (
            <div className="card-container" key={id}>
              <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          )})
        }
      </div>
    )
  }
}

export default CardList;