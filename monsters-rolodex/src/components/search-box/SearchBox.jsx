import { Component } from "react";
import './search-box.css';


class SearchBox extends Component{

  render(){
    const { onChange } = this.props;
    return(
      <div>
        <input
          type="search"
          placeholder="search monsters"
          className="search-box"
          onChange={onChange}
        />
      </div>
    )
  }
}

export default SearchBox;