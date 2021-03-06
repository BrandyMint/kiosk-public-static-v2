import React, { Component, PropTypes } from 'react';
import * as schemas from '../../../schemas';
import { humanizedMoney } from '../../../helpers/money';

class HumanizedMoney extends Component {
  render() {
    const { money } = this.props;

    return (
      <span>{humanizedMoney(money)}</span>
    );
  }
}

HumanizedMoney.propTypes = {
  money: schemas.money,
};

export default HumanizedMoney;