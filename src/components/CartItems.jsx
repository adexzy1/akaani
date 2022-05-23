import coconut from '../assets/coconut.svg';
import css from '../css/cart.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CartItems = ({ price, name, tags }) => {
  return (
    <section className={css.carItemContainer}>
      <section className={css.leftCol}>
        <img src={coconut} alt="coconut" />
        <div>
          <span>{name}</span>
          <p>${price}</p>
        </div>
      </section>

      <section className={css.middleCol}>
        <select>
          <option>1kg</option>
        </select>
        <MdKeyboardArrowDown />
      </section>

      <div className={css.rightCol}>
        {tags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
    </section>
  );
};

export default CartItems;
