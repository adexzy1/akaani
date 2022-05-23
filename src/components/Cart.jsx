import css from '../css/cart.module.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import CartIcon from './CartIcon';
import CartItems from './CartItems';

const Cart = ({ showCart, setShowCart }) => {
  return (
    <section className={`${css.wrapper} ${showCart && css.isActive}`}>
      <div className={css.topbar}>
        <div>
          <HiArrowNarrowRight onClick={() => setShowCart(false)} />
          <p>My Cart</p>
        </div>

        <CartIcon />
      </div>

      <section className={css.cartItemsWrapper}>
        <CartItems name={'Okazi Leaves '} price={30} tags={['M']} />
        <CartItems name={'Okazi Leaves .'} price={120} tags={['R']} />
        <CartItems
          name={'Rice Bean Lea...'}
          price={50}
          tags={['M', 'P', 'R']}
        />
        <CartItems name={'Efo Stew Ingre...'} price={45} tags={['M', 'P']} />
      </section>

      <div className={css.footer}>
        <div className={css.total}>
          <span>TOTAL</span>
          <h5>$2,560</h5>
        </div>

        <button>DONE SHOPPING</button>
      </div>
    </section>
  );
};

export default Cart;
