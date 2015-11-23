import React, { Component, PropTypes } from 'react';
import { load } from '../../../actions/productCardActions';
// import makeTranslatable from '../../HoC/makeTranslatable';
import ProductCard from './ProductCard';

class ProductCardContainer extends Component {
  state = {
    good: null,
    isLoading: !this.props.productCard,
    productCard: this.props.productCard || null,
  }
  componentDidMount() {
    const { productCardID } = this.props;

    if (productCardID) {
      load(productCardID)
        .then((productCard) => this.setState({ productCard, isLoading: false }));
    }
  }
  handleGoodChange(good) {
    const product = {
      ...this.state.productCard.product,
      article: good ? good.article : null,
    };

    this.setState({ good, product });
  }
  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    } else {
      return (
        <ProductCard
          {...this.state.productCard}
          good={this.state.good}
          onGoodChange={this.handleGoodChange.bind(this)}
        />
      );
    }
  }
}

ProductCardContainer.propTypes = {
  productCard: PropTypes.object,
  productCardID: PropTypes.number,
};

export default ProductCardContainer;

// import React, { Component, PropTypes } from 'react';
// import ProductCard from './ProductCard';

// class ProductCardContainer extends Component {
//   state = {
//     loading: true,
//     productCard: {}
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         loading: false,
//         productCard: { product: {title: 'Продукт'}},
//       });
//     }, 3000)
//   }
//   render() {
//     return (
//       <ProductCard
//         loading={this.state.loading}
//         {...this.state.productCard}
//       />
//     );
//   }
// }

// ProductCardContainer.propTypes = {
//   productCardID: PropTypes.number.isRequired,
// };

// export default ProductCardContainer;



// @makeTranslatable
// export default class ProductCardContainer extends Component {
//   static propTypes = {
//     addWishlistUrl: PropTypes.string,
//     formAuthenticity: PropTypes.object,
//     hasWishlist: PropTypes.bool,
//     isWishlisted: PropTypes.bool,
//     product: PropTypes.object.isRequired,
//     similarProducts: PropTypes.array,
//     wishlistUrl: PropTypes.string,
//   }
//   static defaultProps = {
//     formAuthenticity: {},
//     similarProducts: [],
//   }
//   state = {
//     good: null,
//     product: this.props.product
//   }
//   handleGoodChange(good) {
//     const product = {
//       ...this.state.product,
//       article: good ? good.article : null,
//     };

//     this.setState({ good, product });
//   }
//   render() {
//     return (
//       <ProductCard
//         {...this.props}
//         good={this.state.good}
//         onGoodChange={this.handleGoodChange.bind(this)}
//         product={this.state.product}
//       />
//     );
//   }
// }