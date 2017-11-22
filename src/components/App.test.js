import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renderiza corretamente', () => {
    expect(app).toMatchSnapshot();
  });

  it('contem um componente Wallet conectado', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('contem um componente Loot conectado', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  });
});