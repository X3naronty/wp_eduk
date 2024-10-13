import avatarJpg from '@/assets/avatar.jpg';
import avatarPng from '@/assets/avatar.png';
import CalendarImage from '@/assets/calendar.svg';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as styles from '@/components/App.module.scss';

console.log(styles);

function TODO(a: number) {
  return a**a;
}

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  // TODO('23423');
  return (
    <div data-testid={'App.DataTestId'}>
      <h1>Platform={__PLATFORM__}</h1>
      <div>
        <img src={avatarJpg} width='200' height='200' alt="UlbiTV avatar jpg" />
        <img src={avatarPng} width='200' height='200' alt="UlbiTV avatar png" />
        <div>
          <CalendarImage className={styles.icon} width='150' height='150'   />
        </div>
      </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <p>Hello world</p>
      <h1>{count}</h1>
      <button className={styles.button} onClick={increment}>
        Inc <span>test</span>
      </button>
      <Outlet />
    </div>
  );
};
