import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';

export default withRouter(withUser(HeaderView));
// withRouter를 둘러준 컴포넌트는
