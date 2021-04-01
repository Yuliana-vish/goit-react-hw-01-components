import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor: getRandColor()}}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}


Statistic.defaultProps = { title: '' };
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistic;
