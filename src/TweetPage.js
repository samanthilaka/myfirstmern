import React , { useState } from 'react';
import './App.css';
import Tweet from './Tweet';

function TweetPage() {
  
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([
    { name: 'Pradeep', message: 'Hello Pradeep' }, { name: 'Rukshan', message: 'Hello Bro' }, { name: 'Chathu', message: 'Hello Chathu' }
  ]);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  return (
    <div className='shop' >
      <h1>Shop Page</h1>
      <botton onClick={increment}>Increment</botton>
      <h1 className={isRed ? 'red' : ''}>{count}</h1>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} count={count} />
      ))}


    </div>
  );
}

export default TweetPage;