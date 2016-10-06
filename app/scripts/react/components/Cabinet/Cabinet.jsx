import React, { Component, PropTypes } from 'react';
import CabinetOrder from './CabinetOrder'
import Pagination from '../Pagination'
import provideTranslations from '../HoC/provideTranslations';

class Cabinet extends Component {
  render() {
    const {
      client: {
        name,
        phones,
        emails,
        logoutUrl,
      },
      orders: {
        currentPage,
        totalPages,
        items
      },
      t,
    } = this.props;

    return (
      <div className='b-page__content__inner b-page__content__inner_content'>
        <section className='b-cart'>
          <div className='b-cabinet b-cart__content'>
            <div className='b-cabinet_title'>
              {t('client.cabinet.title')}
              {name}
              {phones.join("\n")}
              {emails.join("\n")}
              <a href={logoutUrl} className='pull-right'>{t('client.logout')}</a>
            </div>
            { items ? ( 
              <div>
                <h3> Список заказов </h3>
                <ul className='b-cart__list'>
                  {items.map((order, idx) => <CabinetOrder {...order} key={`cabinet-order-$(idx)`} />)}
                </ul>
                <Pagination currentPage={currentPage} totalPages={totalPages} />
              </div>
            ) : (
              <div className='b-text b-text_center'>
                <p>{t('orders.empty')}</p>
              </div>
            )}
          </div>
          <div className='b-cart__action'></div>
        </section>
      </div>
    );
  }
}

Cabinet.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phones: PropTypes.arrayOf(PropTypes.string).isOptional,
    emails: PropTypes.arrayOf(PropTypes.string).isOptional,
    logoutUrl: PropTypes.string.isRequired,
  }).isRequired,
  orders: PropTypes.shape({
    currentPage: Pagination.propTypes.currentPage, 
    totalPages: Pagination.propTypes.totalPages,
    items: PropTypes.arrayOf(PropTypes.shape(...CabinetOrder.propTypes)).isOptional,
  }).isOptional,
};

export default provideTranslations(Cabinet);