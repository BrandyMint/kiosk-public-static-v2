import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import FormAuthenticity from '../common/FormAuthenticity';
import Link from '../common/Link';
import RelativeImage from '../common/Image/RelativeImage';

class CartItems extends Component {
  renderItem(item, idx) {
    return (
      <li className="b-cart__item" key={idx}>
        <div className="b-cart__item__col-img">
          <RelativeImage
            className="b-cart__item__img"
            image={item.product.image}
          />
        </div>
        <div className="b-cart__item__col-content">
          <h2 className="b-cart__item__title">
            <Link href="vendor_product_path(item.product)" target="_blank">
              <span>{item.title}</span>
            </Link>
          </h2>
        </div>
      </li>
    );
  // = link_to item.title, vendor_product_path(item.product), :target => '_blank'
  //   = good_details item.good

  //   - unless item.valid?
  //     .b-alert.b-alert_danger
  //       - item.errors.each do |key, value|
  //         %p= item.errors.messages[key].join(',') if value.present?

  }
  render() {
    const { formAuthenticity, items } = this.props;
    
    if (items.length) {
      return (
        <form
          acceptCharset="UTF-8"
          action="/cart"
          className="edit_cart"
          method="POST"
          noValidate={true}
        >
          <FormAuthenticity {...formAuthenticity} />
          <ul className="b-cart__list">
            {items.map(this.renderItem)}
          </ul>
        </form>
      );
    }

    return (
      <div className="b-text b-text_center">
        <p>{t('vendor.cart.empty')}</p>
      </div>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
};

export default CartItems;

 // = simple_form_for cart_form, :url => vendor_cart_path, wrapper_mappings: {radio_buttons: :vertical_radio_and_checkboxes} do |f|
 //          - unless cart_form.valid?
 //            -# = f.error_notification
 //            - cart_form.errors.each do |key, value|
 //              = f.error key if value.present?
 //          %ul.b-cart__list
 //            = render partial: 'item', collection: CartItemDecorator.decorate_collection(cart_form.items), locals: { f: f}

 //            - if cart.package_item.present?
 //              = render 'packaging_item', item: CartItemDecorator.decorate(cart.package_item)

 //            - elsif available_packages.any?
 //              = render partial: 'packaging', locals: {f: f, packages: available_packages }

 //          .b-cart__total-sum
 //            = vt 'cart.overall'
 //            %span{'cart-total' => true}= cart.total_price

 //          .b-cart__action
 //            .b-cart__action__container
 //              .b-cart__action__col-clear
 //                %a.b-cart__action__clear.b-btn.b-btn_trans{href: url_for(vendor_cart_path), data: {method: :delete, confirm: vt('alerts.confirm')}}
 //                  = vt('cart.clear')

 //              .b-cart__action__col-right
 //                = cart_coupon
 //                .b-cart__action__col-submit
 //                  = f.submit vt('order.submit'), class: 'b-cart__action__submit b-btn', data: { 'cart-submit' => true }
