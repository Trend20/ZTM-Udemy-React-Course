import { Component } from "react";
import Card from "../card/card";
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
            return (
            <Card monster={monster} />
          )})
        }
      </div>
    )
  }
}

export default CardList;