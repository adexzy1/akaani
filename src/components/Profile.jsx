import css from '../css/navbar.module.css';
import logoutBtn from '../assets/logout.svg';

const Profile = () => {
  return (
    <section className={css.profile}>
      <div>LE</div>
      <h3>Laura Edson</h3>
      <p>lauraedson@work.com</p>

      <button>
        <img src={logoutBtn} alt="logout Btn" />
      </button>
    </section>
  );
};

export default Profile;
