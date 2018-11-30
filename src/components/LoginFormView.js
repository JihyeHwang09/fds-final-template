import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uername: '',
      password: '',
      success: false,
      //로그인에 성공하면,  sucess를 true를 바꿔주고 Redirect를 호출
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    this.setState({
      success: true,
    });
    // Redirect 컴포넌트를 렌더링 -> 주소표시줄의 상태가 바뀜
  }

  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          o
          onChange={e => this.handlePasswordChange(e)}
        />
        {/* 버튼을 클릭했을 때, 로그인을 한다는 건 위에서 내려준 로그인 함수를 호출하면 됨 */}
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
