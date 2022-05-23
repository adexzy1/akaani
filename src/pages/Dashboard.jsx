import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import css from '../css/dashboard.module.css';

const Dashboard = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <section className={css.dashboardWrapper}>
      <NavBar />
      <Main setShowCart={setShowCart} />
      <Sidebar />

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </section>
  );
};

export default Dashboard;
