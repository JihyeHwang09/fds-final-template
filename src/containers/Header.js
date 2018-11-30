import React from 'react';
import HeaderView from '../components/HeaderView';
import { UserConsumer } from '../contexts/UserContext';

export default function Header(props) {
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}
