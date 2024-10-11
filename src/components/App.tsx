import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>Hello world</p>
			<h1>{count}</h1>
			<button onClick={increment}>Inc <span>test</span></button>
    </div>
  );
};
