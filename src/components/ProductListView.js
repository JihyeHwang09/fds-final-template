// 배열을 받아서 화면에 표시, 이벤트 리스너 등록
import React, { Component } from 'react';

export default class ProductListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // 받고 싶은 데이터를 주석으로 달아놓음
      //   {
      //       id: 1,
      //       title: '자켓',
      //       imgURL: '...'
      //   }
    ],
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            <div>{p.title}</div>
            <img stc={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}
