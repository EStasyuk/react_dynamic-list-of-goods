import './App.scss';
import { GoodsList } from './GoodsList';
import React, { useState } from 'react';
import { Good } from './types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    const allGoods = await goodsAPI.getAll();

    setGoods(allGoods);
  };

  const handleLoadFirstFive = async () => {
    const fiveFirst = await goodsAPI.get5First();

    setGoods(fiveFirst);
  };

  const handleLoadRed = async () => {
    const red = await goodsAPI.getRedGoods();

    setGoods(red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
