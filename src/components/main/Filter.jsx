import React from 'react';
import css from '../../css/filter.module.css';

const Filter = () => {
  return (
    <section className={css.wrapper}>
      <p>Paid</p>
      <p>Pending</p>
      <p>Completed</p>
      <div className={css.active}></div>
    </section>
  );
};

export default Filter;
