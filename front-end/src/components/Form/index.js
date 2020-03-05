import React, { Component } from 'react';
import FormValidator from './../../helpers/FormValidator'

const objectValidation = [
        {
            campo: "nome",
            metodo: "isEmpty",
            valido: false,
            mensagem: "preencha o nome do autor"
        },
        {
            campo: "livro",
            metodo: "isEmpty",
            valido: false,
            mensagem: "preencha o nome do livro"
        },
        {
            campo: "preco",
            metodo: "isInt",
            valido: true,
            mensagem: "preencha o preço do livro com um valor válido"
        }
    ]

class Form extends Component {

  constructor(props) {
    super(props)
    this.formValidator = new FormValidator(objectValidation);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.formValidator.valido()
    }

    this.state = this.stateInicial;
  }

  listenInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    const validacao = this.formValidator.validar(this.state);

    if(validacao.isValid){
        this.props.listenSubmit(this.state);
        this.setState(this.stateInicial);
    }else{
        const {nome, livro, preco} = validacao;
        const campos = [nome, livro, preco];

        const camposInvalidos = campos.filter(e=> {
            return e.isInvalid
        });
        camposInvalidos.forEach(console.log);
    }
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <>
        <div className="row">
          <div className="col s4">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              name="nome"
              className="validate"
              value={nome}
              onChange={this.listenInput}
            />
          </div>
          <div className="col s4">
            <label htmlFor="livro">Livro:</label>
            <input
              id="livro"
              type="text"
              name="livro"
              className="validate"
              value={livro}
              onChange={this.listenInput}
            />
          </div>
          <div className="col s4">
            <label htmlFor="preco">Preço:</label>
            <input
              id="preco"
              type="text"
              name="preco"
              className="validate"
              value={preco}
              onChange={this.listenInput}
            />
          </div>
          <button onClick={this.submitForm} className="btn waves-effect waves-light offset-s5 col s2" type="button" name="action">Salvar</button>
        </div>
      </>
    );
  }
}

export default Form