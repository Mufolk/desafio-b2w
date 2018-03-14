import React, { Component } from 'react';
import $ from 'jquery';
import Film from './Films';

{/*Número é a variável que iria para a lógica do clique do button Next
  serve para adicionar um index a url que irá fazer download de um planeta
  específico */}
var number = Math.floor((Math.random() * 60) + 1);

class App extends Component {
  constructor() {
    super();    
    this.state = {planetList:[]};

  }

{/*Aqui baixo o json com o planeta com um numero leatório que depois iria
  incluir a logica num button "Next" pra tornar o download dos planetas
  aleatório entre 1 e 61*/}
  componentDidMount(){  
    $.ajax({
      url:'https://swapi.co/api/planets/'+number+'/?format=json',
      dataType: 'json',
      crossDomain:true,
      success:function(resposta){    
        this.setState({planetList:resposta},function(){
          console.log(this.state.planetList);
        }.bind(this));
         console.log(this.state.planetList);
      }.bind(this)
    });
  }

  
  render() {
    return (
      <div className="card centralizado sem-borda">  
          <div className="card-body text-center ">

          <h2 className="card-title">Planet Name: {this.state.planetList.name} </h2>

            <ul className="list-group list-group-flush">
              <li className="list-group-item sem-borda">Population: {this.state.planetList.population}</li>
              <li className="list-group-item sem-borda">Climate: {this.state.planetList.climate}</li>
              <li className="list-group-item sem-borda">Terrain: {this.state.planetList.terrain}</li>
              {/* Aqui entraria um component film que receberia um array
              com os filmes e organizaria os titulos de acordo com as urls no
              componente. Porém ainda nao sei fazer isso. */}
              <Film films = {films} />
            </ul>   
            <a href="#" className="btn btn-primary com-margem">
              Go SomeWhere
            </a>
  
        </div>
      </div>
    );

  }
   {/* Observação final: utilizei bootstrap para facilitar a manipulação
    do css quanto à responsividade. Utilizei jquery para fazer o ajax,
    pois tenho um conhecimento razoável do mesmo. Mas não entendi muito
    como utilizar os componentes no react. Tenho essas dúvidas, pois trasmitir
    os dados para um component e depois fazer uma desacoplação para um box/wrapper 
    ainda é muito confuso para mim. */}
}

export default App;

