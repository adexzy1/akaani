import css from '../../css/main.module.css';

const Stats = ({ icon, label, text }) => {
  return (
    <section className={css.stats}>
      <div className={css.leftCol}>
        <img src={icon} alt="icon" />
      </div>
      <div className={css.rightCol}>
        <span>{label}</span>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Stats;
