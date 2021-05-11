import React from 'react';
import CakeCard from './CakeCard';
import './Main.css';

export default function Main() {
  const cakes = [{ name: ' 1קצפת' ,price:650}, { name: '1שוקולד' ,price:150},{ name: '2קצפת',price:50 }, { name: '2שוקולד' ,price:90},{ name: '3קצפת' ,price:50}, { name: '3שוקולד',price:70 }];

  return (
    <div class="main_container">
      {cakes && cakes.map(d => <CakeCard cakeName={d.name} price={d.price}/>)}
    </div>
  );
}
