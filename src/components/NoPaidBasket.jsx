import shopIcon from '../assets/shop.svg';
import css from '../css/nopaidbasket.module.css';

const NoPaidBasket = () => {
  return (
    <section className={css.wrapper}>
      <section className={css.imgWrapper}>
        <img src={shopIcon} alt="shop-icon" />
      </section>

      <p>No Paid Baskets, yet!</p>
    </section>
  );
};

export default NoPaidBasket;
