import css from '../css/main.module.css';
import Stats from './main/Stats';
import Topbar from './main/Topbar';
import truck from '../assets/truck.svg';
import gift from '../assets/gift.svg';
import creditcard from '../assets/creditcard.svg';
import Basket from './main/Basket';
import CartIcon from './CartIcon';

const Main = ({ setShowCart }) => {
  return (
    <main className={css.wrapper}>
      <Topbar />
      <section className={css.statsWrapper}>
        <Stats icon={truck} text={0} label={'In-Transit Jobs'} />
        <Stats icon={creditcard} text={'$0.00'} label={'Total Paid'} />
        <Stats icon={gift} text={0} label={'Completed Jobs'} />
      </section>
      <Basket />

      <section className={css.carticon}>
        <CartIcon setShowCart={setShowCart} />
      </section>
    </main>
  );
};

export default Main;
