import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      // {
      //   "id": 1,
      //   "productId": 1,
      //   "title": "Medium",
      //   "price": 30000
      // },
    ],
    // 장바구니 항목 추가 시 호출되는 함수
    // 옵션 id와 수량을 인수로 넘겨야 함
    onCreateCartItem: () => {},
  };
  constructor(props) {
    super(props);

    this.state = {
      // 가격을 표시하기 위해서 수량과 optionId를 저장
      // 장바구니 전송할 때 optionId가 필요하므로 price가 아닌 optionId를 저장
      quantity: 1,
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),
      // 옵션을 바꿨을 때, 수량을 1로 바꾸는 코드
      quantity: 1,
    });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    const { quantity, selectedOptionId } = this.state;

    const selectedOption = options.find(o => o.id === selectedOptionId);

    // selectedOption가 undefined이면 -> falsy이므로 && 왼쪽의 undefiened를 반환
    // selectedOption에 값이 들어있으면 -> truthy이므로 && 오른쪽의 selectedOption.price * quantity를 반환
    const totalPrice = selectedOption && selectedOption.price * quantity;
    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          value={quantity}
          type="number" // 입력가능한 값의 범위
          min="1"
          max="10"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>가격: {totalPrice}</div>
        {/* selectedOptionId가 ''일 때,quantity가 0이하일 때  */}

        <button
          onClick={() => {
            const { selectedOptionId, quantity } = this.state;
            if (selectedOptionId === '') {
              alert('옵션을 선택하세요.');
            } else if (quantity < 1) {
              alert('1 이상의 수량을 입력하세요.');
            } else {
              this.props.onCreateCartItem(selectedOptionId, quantity);
            }
          }}
        >
          장바구니에 담기
        </button>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
