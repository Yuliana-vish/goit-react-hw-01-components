import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friendList/FriendList.module.css';
import defaultImg from '../img/defaultImg.jpg'


const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.green : styles.red}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImg
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
