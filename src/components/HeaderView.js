import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class HeaderView extends Component {
  render() {
    // withUser로 감싸져 있는 logout함수를 받을 수 있다
    const { username, logout, history } = this.props;

    return (
      <div>
        <Link to="/">쇼핑몰</Link>
        {/* username이 있으면 사용자 이름 표시, 없으면 로그인 버튼 표시 */}
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
