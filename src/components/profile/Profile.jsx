import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImg from '../img/defaultImg.jpg';


const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
            width="320"
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.span}>Followers</span>
            <span className={styles.stat}>{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.span}>Views</span>
            <span className={styles.stat}>{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.span}>Likes</span>
            <span className={styles.stat}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
};
Profile.defaultProps = {
    avatar: defaultImg,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    
};
export default Profile;