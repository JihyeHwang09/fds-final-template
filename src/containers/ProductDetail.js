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
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}
