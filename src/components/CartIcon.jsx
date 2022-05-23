import { BsFillBasket2Fill } from 'react-icons/bs';
import css from '../css/carticon.module.css';

const CartIcon = ({ setShowCart }) => {
  return (
    <section onClick={() => setShowCart(true)} className={css.wrapper}>
      <BsFillBasket2Fill />
      <div className={css.quantity}>4</div>
    </section>
  );
};

export default CartIcon;
