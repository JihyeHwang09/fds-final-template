import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
export default class HeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoutSuccess: false,
    };
  }
  render() {
    // withUser로 감싸져 있는 logout함수를 받을 수 있다
    const { username, logout } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
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
                this.setState({
                  logoutSuccess: true,
                });
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
