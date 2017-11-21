import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renderiza corretamente', () => {
    expect(app).toMatchSnapshot();
  });
});