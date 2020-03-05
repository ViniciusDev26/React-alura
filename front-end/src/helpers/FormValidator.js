import Validator from 'validator';

class FormValidator {
    
    constructor(validacoes){
        this.validacoes = validacoes
    }

    validar(state){

        let validacao = this.valido();

        this.validacoes.forEach(regra =>{
            const campoValor = state[regra.campo.toString()];
            const args = regra.args || [];
            const metodoValidacao = typeof regra.metodo === "string" ? Validator[regra.metodo] : regra.metodo;
    
            if(metodoValidacao(campoValor, ...args, state) !== regra.valido){
                validacao[regra.campo] = {
                    isInvalid: true,
                    menssage: regra.mensagem
                }
                validacao.isValid = false;
            }
        });
        return validacao;
    }

    valido() {
        const validacao = {}

        this.validacoes.map(regra =>{
            return validacao[regra.campo] = {isInvalid: false, menssage: ''}
        })

        return {isValid: true, ...validacao}
    }
        
}

export default FormValidator;