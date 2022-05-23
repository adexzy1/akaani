import css from '../../css/main.module.css';
import { IoSearchOutline } from 'react-icons/io5';

const Topbar = () => {
  return (
    <section className={css.topbarWrapper}>
      <div>
        <h1 className={css.greeting}>Good Evening, Laura!</h1>
      </div>
      <div className={css.searchWrapper}>
        <IoSearchOutline />
        <input className={css.input} type="text" placeholder="Search Basket" />
      </div>
    </section>
  );
};

export default Topbar;
