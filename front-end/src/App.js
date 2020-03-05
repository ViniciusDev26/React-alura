import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header'
import Table from './components/Table';
import Form from './components/Form'
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

  listenSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render(){
    return (
    <>
      <Header />
      <Table autores= { this.state.autores } removeAutor= {this.removeAutor} />
      <div className="container">
        <Form listenSubmit={ this.listenSubmit }/>
      </div>
    </>
    );
  }
}

export default App;
