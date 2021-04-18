import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        {/* <a href="/profile">Profile</a> */}
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>

      <div className={s.item}>
        {/* <a href="/dialogs">Messages</a> */}
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>

      <div className={s.item}>
        {/* <a href="/news">News</a> */}
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>

      <div className={s.item}>
        {/* <a href="/music">Music</a> */}
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>

      <div className={s.item}>
        {/* <a href="/settings">Settings</a> */}
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>

      <div className={s.item}>  
      <NavLink to="/games" activeClassName={s.activeLink}>Games</NavLink>
      </div>

    </nav>
  )
}

export default Navbar;