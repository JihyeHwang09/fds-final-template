// 배열을 받아서 화면에 표시, 이벤트 리스너 등록
import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';
// 라이브러리에 있는 컴포넌트는 자동 import가 잘 안되므로 직접 추가해주기
import { Link } from 'react-router-dom';

class ProductListView extends Component {
  // 상태를 react 상태에 두기
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // 받고 싶은 데이터를 주석으로 달아놓음
      //   {
      //     id: 1,
      //     title: '자켓',
      //     imgURL: '',
      //   },
      //   {
      //     id: 2,
      //     title: '코트',
      //     imgURL: '',
      //   },
    ],
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            {/* 그냥 a태그 쓰면 화면이 새로고침되서 속도 느림 */}
            {/* router의 link를 이용-> pushState 되게. 꼭 a태그로 그려져야 새 탭에서 열기 기능 사용 가능 */}
            <Link to={`/product/${p.id}`}>{p.title}</Link>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default withLoading(ProductListView);
