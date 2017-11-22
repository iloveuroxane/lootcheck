import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acessaAPIBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.acessaAPIBitcoin();
  }

  computeBitcoin = () =>{
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0)
      return '';

    return this.props.saldo / bitcoin.bpi.BRL.rate_float;
  }

  render() {
    return (
      <h3>Saldo em Bitcoin: {this.computeBitcoin()}</h3>
    );
  }
}

export default connect(
  state => ({ saldo: state.saldo, bitcoin: state.bitcoin }),
  { acessaAPIBitcoin }
)(Loot);
