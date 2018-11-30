import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
      options: [
        //   options객체가 어떻게 생겨쓴지 주석으로 넣어두면, 매번 서버에 들어가서 확인할 필요 x
        // {
        //   "id": 1,
        //   "productId": 1,
        //   "title": "Medium",
        //   "price": 30000
        // },
      ],
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get('/products/' + productId, {
      params: {
        _embed: 'options',
      },
    });
    this.setState({
      ...product,
      loading: false,
    });
  }

  // 서버측 장바구니에 항목을 추가하는 함수
  //  handleCreateCartItem을 화살표 함수로 만들어서 this를 고정 시키면,
  // 아래쪽에서 bind를 해 필요가 x
  // 다른 컴포넌트에 넘겨야 하거나 이벤트 리스너로 등록해야하는 함수는 화살표 함수로 만들면,
  // this가 고정되서 그 이후 코드들이 깔끔해진다.
  handleCreateCartItem = async (optionId, quantity) => {
    //...
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };
  render() {
    // const product = {
    //   id: 1,
    //   title: '자켓',
    //   description: '따뜻해요',
    //   mainImgUrl: '',
    //   detailImgUrls: [''],
    // };
    return (
      <div>
        {/* container 상태와 p.c 상태와 같으면, 이렇게 ...this.state로 상태를 다 내려보내줄 수 있다 */}
        {/* this를 고정시켜서 내리기만 하면 여러가지 방법을 사용할 수 있다 */}
        <ProductDetailView
          onCreateCartItem={this.handleCreateCartItem}
          {...this.state}
        />
      </div>
    );
  }
}
