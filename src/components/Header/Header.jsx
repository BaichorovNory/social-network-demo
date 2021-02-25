import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.loginBlock}>
        {props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Выйти</button></div>
          : <NavLink to={'/login'}>Войти</NavLink>}
      </div>
    </header>
  );
}
export default Header;