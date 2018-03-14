import React, { Component } from 'react';

class Film extends Component {
  constructor() {
    super();    
    this.state = {films:[]};

  }
   {/*Aqui iniciei a lófica do component film, porém não soube 
    completar e trazer os dados para cá */}
  render(){
      return(
        <ul className="list-group list-group-flush com-margem">
          <h6>Featured in</h6>
          <li className="list-group-item sem-borda com-margem-pequena">
            {this.state.films.title}
          </li>
        </ul>
       );

  }

}

export default Film;
