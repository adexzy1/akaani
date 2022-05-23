import css from '../../css/basket.module.css';
import NoPaidBasket from '../NoPaidBasket';
import Filter from './Filter';

const Basket = () => {
  return (
    <section>
      <div className={css.basketWrapper}>
        <h3 className={css.header}>Baskets</h3>
        <button className={css.createBasketBtn}>Create Basket</button>
      </div>
      <Filter />
      <NoPaidBasket />
    </section>
  );
};

export default Basket;
