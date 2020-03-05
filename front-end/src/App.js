import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import autores from './data/autores';

class App extends Component {
  state = {
    autores: autores
  }

  removeAutor = index => {
    const {autores} = this.state
  
    this.setState({
      autores: autores.filter((autor, posAtual) =>{
        return index !== posAtual;
      }),
    })
  }

  render(){
    return (
      <div className="App">
        <Table autores= { this.state.autores } removeAutor= {this.removeAutor} />
      </div>
    );
  }
}

export default App;
