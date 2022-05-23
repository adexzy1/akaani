import css from '../css/navbar.module.css';

const NavLinks = ({ icon, text }) => {
  return (
    <li className={css.navlinks}>
      {icon}
      {text}
    </li>
  );
};

export default NavLinks;
