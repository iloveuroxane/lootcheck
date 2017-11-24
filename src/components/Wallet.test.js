import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDepositar = jest.fn();
  const mockSacar = jest.fn();
  const props = { saldo: 20, depositar: mockDepositar, sacar: mockSacar };
  const carteira = shallow(<Wallet {...props} />);

  it('renderiza corretamente', () => {
    expect(carteira).toMatchSnapshot();
  });

  it('mostra o saldo presente nas props', () => {
    expect(carteira.find('.saldo').text()).toEqual('Saldo da Carteira: 20');
  });

  it('cria um input para sacar ou depositar dinheiro na conta', () => {
    expect(carteira.find('.input-carteira').exists()).toBe(true);
  });

  describe('quando o usuario escreve no input da carteira', () => {
    const saldo = '25';

    beforeEach(() => {
      carteira.find('.input-carteira').simulate('change', { target: { value: saldo } });
    });

    it('atualiza o valor local do saldo no "state" e converte para numero', () => {
      expect(carteira.state().saldo).toEqual(parseInt(saldo, 10));
    });

    describe('e o usuario deseja fazer um deposito', () => {
      beforeEach(() => {
        carteira.find('.btn-deposito').simulate('click');
      });

      it('dispara a função "depositar()" recebida via props com o valor do saldo local', () => {
        expect(mockDepositar).toHaveBeenCalledWith(parseInt(saldo, 10));
      });
    });

    describe('e o usuario deseja fazer um saque', () => {
      beforeEach(() => {
        carteira.find('.btn-saque').simulate('click');
      });

      it('dispara a função "sacar()" recebida via props com o valor do saldo local', () => {
        expect(mockSacar).toHaveBeenCalledWith(parseInt(saldo, 10));
      });
    })
  });
});
