
import React from 'react';
import './App.css';
///
import Container from './components/container/Container.jsx';
import Profile from './components/profile/Profile.jsx';
import Statistic from './components/statistic/Statistic.jsx';
import FriendList from './components/friendList/FriendList.jsx';
import TransactionHistory from './components/transactions/Transactions.jsx';
///
import user from './dataJson/user.json';
import statisticData from './dataJson/statistic.json';
import friends from './dataJson/friendList.json';
import transactions from './dataJson/trasactions.json';



const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
