import React from 'react';
import Wallet from './Wallet';
import Loot from "./Loot";

const App = () => (
  <div>
    <h2>Saldo Bancario</h2>
    <hr />
    <Wallet />
    <hr />
    <Loot />
  </div>
);

export default App;