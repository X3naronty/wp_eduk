import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as styles from './App.module.scss';

console.log(styles);

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <p>Hello world</p>
			<h1>{count}</h1>
			<button className={styles.button} onClick={increment}>Inc <span>test</span></button>
      <Outlet/>
    </div>
  );
};
