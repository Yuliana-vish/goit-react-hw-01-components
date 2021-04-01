import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friendList/FriendList.module.css';
import FriendListItem from '../friendList/FrienListItem';

   
const FriendList = ({friends}) => {
    return (
      <section className={styles.container}>
        <ul className={styles.friendList}>
          {friends.map(({ avatar, name, id, isOnline }) => (
            <FriendListItem
              key={id}
              avatar={avatar}
              isOnline={isOnline}
              name={name}
            />
          ))}
        </ul>
      </section>
    );
}
FriendListItem.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/763/763704.svg',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};


export default FriendList;