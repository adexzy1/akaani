import Logo from '../assets/logo.svg';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { RiHistoryFill } from 'react-icons/ri';
import css from '../css/navbar.module.css';
import Profile from './Profile';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <aside className={css.navbarContainer}>
      <div className={css.logo}>
        <img src={Logo} alt="logo" />
      </div>

      <nav className={css.navlinksContainer}>
        <ul>
          <NavLinks icon={<FaUserCircle />} text={'Profile'} />
          <NavLinks icon={<BsFillBasket2Fill />} text={' Basket'} />
          <NavLinks icon={<RiHistoryFill />} text={'Order History'} />
        </ul>
      </nav>

      <Profile />
    </aside>
  );
};

export default NavBar;
