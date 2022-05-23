import css from '../css/sidebar.module.css';

const SideBar = () => {
  return (
    <section className={css.wrapper}>
      <div>
        <h5>INVITES </h5>
        <p>You have no invites. </p>
      </div>

      <div>
        <h5>RECENT PAYMENTS</h5>
        <p>No Payment has been made. </p>
      </div>

      <div>
        <h5>PREVIOUS ORDERS</h5>
        <p>You have created no order.</p>
      </div>
    </section>
  );
};

export default SideBar;
