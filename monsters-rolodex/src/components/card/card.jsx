import { Component } from "react";
import './card.css';

class Card extends Component{

  render(){
const { monster } = this.props;
const { name, id, email} = monster;
    return (
      <div className="card-container" key={id}>
        <img src={`https://robohash.org/${id}?set=set2`} alt="monster" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;