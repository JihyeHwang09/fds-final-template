import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import UserProvider from './contexts/UserContext';

// 라우터를 쓰면, App.js는 주소 들어왔을 때 어떤 컴포넌트 보여줄 지의 역할을 함
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            {/* Route는 if~else가 아니라,  */}
            {/* if의 의미 Route path="/"는 "/"로 시작할 때 */}
            {/* 대처방안1. switch 사용 */}
            {/* 대처방안2. exact prop 사용 */}
            {/* exact prop이 있을 때 = 주소가 정확히 일치해야만 페이지가 그려짐 */}
            {/* exact prop이 없을 때 = 주소가 path로 시작하면 페이지가 그려짐 */}

            {/* <Switch> */}
            {/* <Switch> 사용시 위에 코드에 해당하면 그 코드 살행하고 빠져나가므로 주의 */}
            <Route exact path="/" component={HomePage} />
            {/* Route 컴포넌트 -> ProductPage에 우리가 넘겨주지 않은 prop이 넘어간다  */}
            {/* ProductPages는 match:  params: productId: 3이 넘어감 */}
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
            {/* </Switch> */}
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
