import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to='/profile' activeClassName={style.activeLink}>Главная</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/messages' activeClassName={style.activeLink}>Сообщения</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/news' activeClassName={style.activeLink}>Новости</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/friends' activeClassName={style.activeLink}>Друзья</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/music' activeClassName={style.activeLink}>Музыка</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/users' activeClassName={style.activeLink}>Пользователи</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/settings' activeClassName={style.activeLink}>Настройки</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;