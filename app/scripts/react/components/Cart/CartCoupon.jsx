import React, { Component, PropTypes } from 'react';
import { t } from 'i18next';
import * as apiRoutes from '../../../routes/api';
import makeTranslatable from '../HoC/makeTranslatable';
import Alert from '../common/Alert';
import TextInput from '../common/TextInput';
import SubmitInput from '../common/SubmitInput';

@makeTranslatable
export default class CartCoupon extends Component {
  state = {
    code: '',
    message: '',
  }
  updateMessage(message) {
    this.setState({ message });
  }
  checkCode(code) {
    if (this.pendingRequest) this.pendingRequest.abort();

    this.pendingRequest = $.ajax({
      url: apiRoutes.checkCouponCode(),
      type: 'POST',
      data: { code },
    });

    return this.pendingRequest;
  }
  handleChange(e) {
    const { value } = e.target;
    const { code } = this.state;

    if (value === code || value === '') {
      this.updateMessage('');
    } else {
      this.updateMessage(t('vendor.coupon.checking'));

      this.checkCode(code)
        .then((data) => {
          let message;

          if (data && data.isActual) {
            message = t('vendor.coupon.discount', { discount: data.discount });
          } else {
            message = t('vendor.coupon.invalid', { value });
          }

          this.updateMessage(message);
        })
        .fail((xhr, textStatus) => {
          let message;

          if (textStatus === 'abort') {
            message = t('vendor.coupon.invalid', { value });
          } else {
            message = t('vendor.coupon.error');
          }

          this.updateMessage(message);
        });
    }

    this.setState({ code: value });
  }
  render() {
    const { code, message } = this.state;

    return (
      <div className="b-cart__action__col-code">
        <TextInput
          className="b-cart__action__code"
          name="coupon_code"
          onChange={::this.handleChange}
          placeholder={t('vendor.placeholders.coupon')}
          value={code}
        />
        <SubmitInput
          className="b-cart__action__submit b-btn"
          name="commit"
          value={t('vendor.order.submit')}
        />
        {code &&
          <Alert
            className="coupon-info"
            info={true}
            text={message}
          />
        }
      </div>
    );
  }
}