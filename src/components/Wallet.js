import React, { Component } from 'react';
import { connect } from 'react-redux';

import { depositar, sacar } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { saldo: undefined };
  }

  atualizaSaldo = evt => {
    this.setState({ saldo: parseInt(evt.target.value, 10) });
  }

  depositar = () => {
    this.props.depositar(this.state.saldo);
  }

  sacar = () => {
    this.props.sacar(this.state.saldo);
  }

  render() {
    return (
      <div>
        <h3 className="saldo">Saldo da Carteira: {this.props.saldo}</h3>
        <br />
        <input className='input-carteira' onChange={this.atualizaSaldo} />
        <button className='btn-deposito' onClick={this.depositar}>Depositar (R$)</button>
        <button className="btn-saque" onClick={this.sacar}>Sacar (R$)</button>
      </div>
    );
  }
}

export default connect(
  state => ({ saldo: state.saldo }),
  { depositar, sacar }
)(Wallet);
