import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
  let props = { saldo: 10, bitcoin: {} }
  let loot = shallow(<Loot {...props} />);

  it('renderiza corretamente', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('quando montado', () => {
    const mockAcessaAPIBitcoin = jest.fn();
    beforeEach(() => {
      props.acessaAPIBitcoin = mockAcessaAPIBitcoin;
      loot = mount(<Loot {...props} />);
    });

    it('dispara a função "acessaAPIBitcoin" recebida via props', () => {
      expect(mockAcessaAPIBitcoin).toHaveBeenCalled()
    });
  });

  describe('quando existem valores válidos na props "bitcoin"', () => {
    beforeEach(() => {
      props = { saldo: 10, bitcoin: { bpi: { BRL: { rate_float: 999.99 } } } };
      loot = shallow(<Loot {...props} />);
    });

    it('mostra o valor correto do bitcoin', () => {
      const calc = props.saldo / props.bitcoin.bpi.BRL.rate_float;
      expect(loot.find('h3').text()).toEqual('Saldo em Bitcoin: ' + calc);
    });
  });
});
