import React, { Component } from 'react';
import temp from '../img/temp.jpg'

class MovieInfo extends Component{
  handleRemove = () =>{
    const { info, onRemove } = this.props;
    if(window.confirm('정말 삭제하시겠습니까?') === true){
      onRemove(info.id)
    }
    else{
      return;
    }

  }
  render(){
    const {id, name, rank, file} = this.props.info;
    return(
      <figure className="movie-card">
        <img src={file} className="movie-img" draggable="false"></img>
        <figcaption className="movie-content">
          <div className="card-name">{name}</div>
          <div className="card-rank">{rank}</div>
        </figcaption>
        <button onClick={this.handleRemove}>삭제</button>
      </figure>
    )
  }
}
export default MovieInfo;
