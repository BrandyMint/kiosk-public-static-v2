import React, { Component, PropTypes } from 'react';
import * as schemas from '../../schemas';
import CartItems from './CartItems';

class Cart extends Component {
  render() {
    const { cartItems, formAuthenticity, totalCount } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <h1 className="b-cart__title">
            Корзина
          </h1>
          <CartItems
            items={cartItems}
            totalCount={totalCount}
          />
        </div>
      </section>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  formAuthenticity: schemas.formAuthenticity,
  totalCount: PropTypes.number,
};
Cart.defaultProps = {
  cartItems: [],
  formAuthenticity: {},
  totalCount: 0,
};

export default Cart;
// <section class="b-cart">
// <div class="b-cart__content">
// <h1 class="b-cart__title" title="translation missing: ru.activerecord.models.cart">Корзина</h1>
// <form accept-charset="UTF-8" action="/cart" class="simple_form edit_cart" id="edit_cart_3481544" method="post" novalidate="novalidate"><div style="display:none"><input name="utf8" type="hidden" value="✓"><input name="_method" type="hidden" value="patch"><input name="authenticity_token" type="hidden" value="U9pqrQGs/+7Ht9qSAjOLpsN18IL6EJyPNSfJu45oLT4="></div><ul class="b-cart__list">
// <li cart-item="17937" class="b-cart__item" data-item-price="2000.00" data-item-total-price="2000.00">
// <div class="b-cart__item__col-img">
// <img alt="Image" class="b-cart__item__img" src="http://thumbor.kiiiosk.ru/unsafe/143x143/http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/5300/image.png">
// </div>
// <div class="b-cart__item__col-content">
// <h2 class="b-cart__item__title">
// <a href="/products/4273-minikoltso-poloski-bez-kamney-chernenoe" target="_blank">Миникольцо Полоски без камней черненое</a>
// </h2>
// Размер: 13
// </div>
// <div class="b-cart__item__col-quantity">
// <span class="b-cart__item__quantity__text">
// Количество
// </span>
// <div class="b-cart__item__quantity__select">
// <select cart-item-selector="basic" id="cart_items_17937_count" name="cart[items][17937][count]"><option selected="selected" value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option>
// <option value="5">5</option>
// <option value="6">6</option></select>
// </div>
// </div>
// <div class="b-cart__item__col-price">
// <div cart-item-total-price="" class="b-cart__item__price" title="За единицу: 2 000 руб.">
// 2 000 руб.
// </div>
// </div>
// <div class="b-cart__item__col-remove">
// <a class="b-cart__item__remove" data-method="delete" href="/cart/items/17937" rel="nofollow"><img alt="" src="http://assets.kiiiosk.ru/images/cross_white.svg">
// </a></div>
// </li>
// <li cart-item="19675" class="b-cart__item" data-item-price="4300.00" data-item-total-price="4300.00">
// <div class="b-cart__item__col-img">
// <img alt="43faea2b 5cca 4164 ac57 110fedc5f6ff" class="b-cart__item__img" src="http://thumbor.kiiiosk.ru/unsafe/143x143/http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25446/43faea2b-5cca-4164-ac57-110fedc5f6ff.jpg">
// </div>
// <div class="b-cart__item__col-content">
// <h2 class="b-cart__item__title">
// <a href="/products/24198-minikoltso-morganna-s-tsirkonami-chernenoe" target="_blank">Миникольцо Morganna с цирконами черненое</a>
// </h2>
// Размер: 16
// </div>
// <div class="b-cart__item__col-quantity">
// <span class="b-cart__item__quantity__text">
// Количество
// </span>
// <div class="b-cart__item__quantity__select">
// <select cart-item-selector="basic" id="cart_items_19675_count" name="cart[items][19675][count]"><option selected="selected" value="1">1</option>
// <option value="2">2</option>
// <option value="3">3</option>
// <option value="4">4</option></select>
// </div>
// </div>
// <div class="b-cart__item__col-price">
// <div cart-item-total-price="" class="b-cart__item__price" title="За единицу: 4 300 руб.">
// 4 300 руб.
// </div>
// </div>
// <div class="b-cart__item__col-remove">
// <a class="b-cart__item__remove" data-method="delete" href="/cart/items/19675" rel="nofollow"><img alt="" src="http://assets.kiiiosk.ru/images/cross_white.svg">
// </a></div>
// </li>

// <li class="b-cart__item_spec">
// <div class="b-cart__item">
// <div class="b-cart__item__col-img">
// <img alt="9d4f0bf6 be43 49d1 8373 dfb0e2a5fd1c" class="b-cart__item__img" src="http://thumbor.kiiiosk.ru/unsafe/184x184/http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/25221/9d4f0bf6-be43-49d1-8373-dfb0e2a5fd1c.jpg">
// </div>
// <div class="b-cart__item__col-content">
// <h2 class="b-cart__item__title">Добавить к заказу</h2>
// <div class="b-form__radio">
// <div class="form-group radio_buttons optional cart_package_good_global_id"><span class="radio"><label for="cart_package_good_global_id_"><input checked="checked" class="radio_buttons optional" data-package="true" data-price="0" id="cart_package_good_global_id_" name="cart[package_good_global_id]" type="radio" value="">Не добавлять</label></span></div>
// </div>
// <div class="b-form__radio">
// <div class="form-group radio_buttons optional cart_package_good_global_id"><span class="radio"><label for="cart_package_good_global_id_z2lkoi8vbwvyy2hhbnrses9qcm9kdwn0sxrlbs8ynzkzoq"><input class="radio_buttons optional" data-package="true" data-price="500" id="cart_package_good_global_id_z2lkoi8vbwvyy2hhbnrses9qcm9kdwn0sxrlbs8ynzkzoq" name="cart[package_good_global_id]" type="radio" value="Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yNzkzOQ">Подарочный футляр 10х10см — <b>500 руб.</b></label></span></div>
// </div>
// <div class="b-form__radio">
// <div class="form-group radio_buttons optional cart_package_good_global_id"><span class="radio"><label for="cart_package_good_global_id_z2lkoi8vbwvyy2hhbnrses9qcm9kdwn0sxrlbs8ynzk0ma"><input class="radio_buttons optional" data-package="true" data-price="900" id="cart_package_good_global_id_z2lkoi8vbwvyy2hhbnrses9qcm9kdwn0sxrlbs8ynzk0ma" name="cart[package_good_global_id]" type="radio" value="Z2lkOi8vbWVyY2hhbnRseS9Qcm9kdWN0SXRlbS8yNzk0MA">Подарочный футляр 15х15см — <b>900 руб.</b></label></span></div>
// </div>
// </div>
// </div>
// </li>

// </ul>
// <div class="b-cart__total-sum">
// Итого:
// <span cart-total="">6 300 руб.</span>
// </div>
// <div class="b-cart__action">
// <div class="b-cart__action__container">
// <div class="b-cart__action__col-clear">
// <a class="b-cart__action__clear b-btn b-btn_trans" data-confirm="Точно очистить?" data-method="delete" href="/cart">
// Очистить корзину
// </a>
// </div>
// <div class="b-cart__action__col-right">
// <span data-react-class="CartCoupon" data-react-props="{&quot;i18n&quot;:{&quot;locale&quot;:&quot;ru&quot;,&quot;translations&quot;:{&quot;vendor&quot;:{&quot;not_published&quot;:&quot;Магазин временно не работает&quot;,&quot;made_in_kiiiosk&quot;:&quot;Сделано на «Киоске»&quot;,&quot;entities&quot;:{&quot;product&quot;:&quot;%{count} товар&quot;,&quot;product_plural_2&quot;:&quot;%{count} товара&quot;,&quot;product_plural_5&quot;:&quot;%{count} товаров&quot;},&quot;badges&quot;:{&quot;new&quot;:&quot;Новинка&quot;,&quot;sale_percent&quot;:&quot;SALE - %{percent}%&quot;,&quot;not_available&quot;:&quot;Не продается&quot;,&quot;sale&quot;:&quot;SALE&quot;,&quot;sold&quot;:&quot;Уточните наличие в наших магазинах&quot;},&quot;search&quot;:{&quot;results_title&quot;:&quot;Результаты поиска (%{count})&quot;,&quot;nothing_found&quot;:&quot;К сожалению, ничего не найдено.&quot;},&quot;seconds_count&quot;:&quot;%{count} секунду&quot;,&quot;seconds_count_plural_2&quot;:&quot;%{count} секунды&quot;,&quot;seconds_count_plural_5&quot;:&quot;%{count} секунд&quot;,&quot;errors&quot;:{&quot;cart&quot;:{&quot;empty&quot;:&quot;В корзине нет товаров&quot;},&quot;coupon&quot;:{&quot;not_found&quot;:&quot;Несуществующий промокод %{code}&quot;,&quot;expired&quot;:&quot;Промокод просрочен %{code}&quot;},&quot;order&quot;:{&quot;invalid_form&quot;:&quot;Закакз еще не принят, исправьте ошибки в форме&quot;}},&quot;placeholders&quot;:{&quot;coupon&quot;:&quot;Промо-код (если есть)&quot;,&quot;search&quot;:&quot;Поиск&quot;},&quot;alerts&quot;:{&quot;confirm&quot;:&quot;Точно очистить?&quot;},&quot;flashes&quot;:{&quot;good_added_to_basket&quot;:&quot;Товар \&quot;%{title}\&quot; добавлен в корзину&quot;},&quot;mails&quot;:{&quot;signature&quot;:&quot;С уважением, интернет-магазин \&quot;%{name}\&quot;&quot;},&quot;auto_menu_items&quot;:{&quot;blog&quot;:&quot;Блог&quot;},&quot;top_banner&quot;:{&quot;default_content&quot;:&quot;Мы открылись!&quot;},&quot;order&quot;:{&quot;fields&quot;:{&quot;phone&quot;:&quot;Телефон&quot;,&quot;name&quot;:&quot;Имя Отчество Фамилия&quot;,&quot;email&quot;:&quot;Email&quot;,&quot;city_title&quot;:&quot;Город доставки&quot;,&quot;address&quot;:&quot;Адрес доставки&quot;,&quot;comment&quot;:&quot;Комментарий&quot;,&quot;coupon_code&quot;:&quot;Промокод&quot;},&quot;placeholders&quot;:{&quot;city_title&quot;:&quot;Москва&quot;,&quot;phone&quot;:&quot;Например, +7 913 123 32 10&quot;,&quot;name&quot;:&quot;Ф.И.О.&quot;,&quot;address&quot;:&quot;Например, Академика Вавилова 12-10&quot;,&quot;comment&quot;:&quot;О чем нам нужно знать&quot;,&quot;email&quot;:&quot;Email&quot;},&quot;submit&quot;:&quot;Оформить заказ&quot;,&quot;pickup_address&quot;:&quot;Адрес самовывоза:&quot;,&quot;title&quot;:&quot;Заказ №%{number}&quot;,&quot;payment_type&quot;:&quot;Способ оплаты: %{title}&quot;,&quot;delivery_type&quot;:&quot;Способ доставки: %{title}&quot;,&quot;free_delivery_text_html&quot;:&quot;Бесплатная доставка при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e&quot;,&quot;checkout_free_delivery_text_html&quot;:&quot;Бесплатно при заказе свыше \u003cnobr\u003e%{free_delivery_threshold}\u003c/nobr\u003e&quot;,&quot;go_back&quot;:&quot;Вернуться назад&quot;,&quot;next&quot;:&quot;Продолжить&quot;,&quot;delivery_tracking_id&quot;:&quot;Трекинг-номер доставки: %{number}&quot;,&quot;check_state&quot;:&quot;Проверить статус доставки&quot;,&quot;public_offer_accepted_html&quot;:&quot;Согласен с условиями \u003cu\u003e\u003ca href=\&quot;%{url}\&quot; target=\&quot;_blank\&quot;\u003eпубличной оферты\u003c/a\u003e\u003c/u\u003e&quot;,&quot;created&quot;:{&quot;title&quot;:&quot;Спасибо за заказ&quot;,&quot;desc_html&quot;:&quot;В ближайшее время менеджер свяжется с вами для подтверждения заказа. \u003cbr\u003e Ваш телефон %{phone} \u003cbr\u003e Ваш заказ %{link} на сумму %{price}\n&quot;},&quot;new&quot;:{&quot;delivery_title&quot;:&quot;Выберите тип доставки.&quot;,&quot;payment_title&quot;:&quot;Способы оплаты&quot;,&quot;contacts_title&quot;:&quot;Введите данные&quot;,&quot;sum&quot;:&quot;на сумму&quot;},&quot;redirect&quot;:&quot;В течение 5-и секунд вы будете переправлены на страницу оплаты.&quot;,&quot;redirecting&quot;:&quot;Переправляю на сайт оплаты&quot;,&quot;go_to_payment&quot;:&quot;Перейти к оплате&quot;,&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;contents&quot;:&quot;Состав заказа:&quot;,&quot;delivery_price&quot;:&quot;Стоимость доставки&quot;,&quot;pay&quot;:&quot;Оплатить&quot;},&quot;blog&quot;:{&quot;read_more&quot;:&quot;Читать далее..&quot;},&quot;notice&quot;:{&quot;catalog_filter&quot;:{&quot;selected_products&quot;:&quot;Выбрано вариантов&quot;,&quot;show_products&quot;:&quot;Показать&quot;}},&quot;coupon&quot;:{&quot;discount&quot;:&quot;Скидка - %{discount}&quot;,&quot;invalid&quot;:&quot;Купон \&quot;%{value}\&quot; НЕ действующий&quot;,&quot;checking&quot;:&quot;Проверяю купон..&quot;,&quot;error&quot;:&quot;Ошибка при проверке купона. Попробуйте еще раз&quot;},&quot;cart&quot;:{&quot;basket_button&quot;:&quot;Корзина&quot;,&quot;amount&quot;:&quot;Количество&quot;,&quot;overall&quot;:&quot;Итого:&quot;,&quot;title&quot;:&quot;Корзина&quot;,&quot;clear&quot;:&quot;Очистить корзину&quot;,&quot;not_available&quot;:&quot;Больше не продается&quot;,&quot;empty&quot;:&quot;Пока тут ничего нет&quot;},&quot;wishlist&quot;:{&quot;add_item&quot;:&quot;Добавить в список желаний&quot;,&quot;wishlist_button&quot;:&quot;Список желаний&quot;,&quot;private_title&quot;:&quot;Ваш список желаний&quot;,&quot;foreign_title&quot;:&quot;Чей-то список желаний&quot;,&quot;empty&quot;:&quot;Пока тут ничего нет&quot;},&quot;packaging&quot;:{&quot;add&quot;:&quot;Добавить&quot;,&quot;add_gift_package&quot;:&quot;Добавить к заказу&quot;,&quot;no_package&quot;:&quot;Не добавлять&quot;},&quot;payment&quot;:{&quot;w1&quot;:{&quot;failure&quot;:{&quot;title&quot;:&quot;Оплата не прошла&quot;,&quot;desc&quot;:&quot;Оплата заказа не была произведена&quot;},&quot;success&quot;:{&quot;title&quot;:&quot;Спасибо за заказ&quot;,&quot;desc&quot;:&quot;Оплата заказа была произведена&quot;}}},&quot;category&quot;:{&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;empty&quot;:&quot;Ой, а здесь ничего нет. Пока.&quot;},&quot;dictionary_entity&quot;:{&quot;continue_shopping&quot;:&quot;Продолжить покупки&quot;,&quot;empty&quot;:&quot;Ой, а здесь ничего нет. Пока.&quot;},&quot;similar_product&quot;:{&quot;title&quot;:&quot;С этим товаром покупают также&quot;},&quot;product&quot;:{&quot;title&quot;:&quot;Товар&quot;,&quot;blank_price&quot;:&quot;Цена неизвестна&quot;,&quot;run_out&quot;:&quot;Нет в наличии&quot;,&quot;not_available&quot;:&quot;Уточните в магазине&quot;,&quot;available&quot;:&quot;Можно купить&quot;,&quot;sold_out_message_html&quot;:&quot;\u0026laquo;%{title}\u0026raquo; сейчас не продается&quot;,&quot;nothing_found_by_criteria&quot;:&quot;Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.&quot;,&quot;category_title&quot;:&quot;Категория&quot;,&quot;show_other_products&quot;:&quot;Посмотреть другие товары&quot;,&quot;show_all&quot;:&quot;Показать все&quot;},&quot;properties&quot;:{&quot;empty&quot;:&quot;Нет характеристик для вывода&quot;},&quot;property&quot;:{&quot;unknown_type&quot;:&quot;Неизвестный тип характеристики&quot;,&quot;defaults&quot;:{&quot;size&quot;:&quot;Размер&quot;,&quot;color&quot;:&quot;Цвет&quot;}},&quot;pages&quot;:{&quot;titles&quot;:{&quot;cart&quot;:&quot;Корзина&quot;,&quot;order&quot;:&quot;Оформление заказа&quot;,&quot;payment&quot;:&quot;Оплата&quot;,&quot;payment_success&quot;:&quot;Успешная оплата&quot;,&quot;payment_error&quot;:&quot;Ошибка оплаты&quot;}},&quot;filter&quot;:{&quot;availability&quot;:&quot;Доступность&quot;,&quot;price_range&quot;:&quot;Ценовой диапазон&quot;,&quot;selected_options&quot;:{&quot;availability&quot;:&quot;Доступность&quot;,&quot;price_range&quot;:&quot;Цена от %{from} до %{to} %{currency}&quot;},&quot;selected_availability&quot;:{&quot;all&quot;:&quot;Все&quot;,&quot;available&quot;:&quot;В наличии&quot;,&quot;run_out&quot;:&quot;Под заказ&quot;,&quot;sale&quot;:&quot;Распродажа&quot;,&quot;unknown&quot;:&quot;unknown&quot;}},&quot;button&quot;:{&quot;to_cart&quot;:&quot;В корзину&quot;,&quot;select_good&quot;:&quot;Выберите характеристику&quot;,&quot;go_wishlist&quot;:&quot;Перейти в \&quot;Список желаний\&quot;&quot;,&quot;to_wishlist&quot;:&quot;Хочу!&quot;,&quot;already&quot;:&quot;Уже в корзине&quot;,&quot;disable_with&quot;:{&quot;sending&quot;:&quot;Отправляем...&quot;,&quot;saving&quot;:&quot;Сохраняем...&quot;,&quot;waiting&quot;:&quot;Подождите...&quot;,&quot;adding&quot;:&quot;Добавляем...&quot;}},&quot;products&quot;:{&quot;nothing_found_by_criteria&quot;:&quot;По данным критериям ничего не найдено&quot;},&quot;client&quot;:{&quot;auth&quot;:&quot;Личный кабинет&quot;,&quot;no_account&quot;:&quot;Нет аккаунта?&quot;,&quot;logged_in_with&quot;:&quot;Вы уже авторизованы под именем\u003cbr /\u003e \u003cb\u003e%{name}\u003c/b\u003e.&quot;,&quot;continue_logged&quot;:&quot;Продолжить под этим именем..&quot;,&quot;create_account&quot;:&quot;Создать&quot;,&quot;logout&quot;:&quot;Выйти&quot;,&quot;cabinet&quot;:{&quot;title&quot;:&quot;Личный кабинет&quot;,&quot;button&quot;:&quot;Кабинет&quot;,&quot;create&quot;:&quot;Создаем личный кабинет&quot;,&quot;send_pin_code&quot;:&quot;Выслать пин-код&quot;,&quot;disable_with&quot;:&quot;Высылаем...&quot;}},&quot;money&quot;:{&quot;unknown_iso_code&quot;:&quot;Неизвестный тип валюты %{isoCode}&quot;},&quot;add_gift_package&quot;:&quot;Добавить подарочную коробку&quot;,&quot;no_package&quot;:&quot;Без упаковки&quot;}}}}"><div class="b-cart__action__col-code" data-reactid=".1t610bzoum8" data-react-checksum="1080923278"><input class="b-cart__action__code" name="coupon_code" placeholder="Промо-код (если есть)" value="" type="text" data-reactid=".1t610bzoum8.0"><span data-reactid=".1t610bzoum8.1"></span></div></span>
// <div class="b-cart__action__col-submit">
// <input class="b-cart__action__submit b-btn" data-cart-submit="true" name="commit" type="submit" value="Оформить заказ">
// </div>
// </div>
// </div>
// </div>
// </form>

// </div>
// </section>























// import * as schemas from '../../schemas';
// import Checkout from '../Checkout';
// import CartTitle from './CartTitle';

// class Cart extends Component {
//   render() {
//     const {
//       backUrl,
//       coupon,
//       deliveryType,
//       deliveryTypes,
//       errorMessage,
//       fields,
//       formAuthenticity,
//       onDeliveryChange,
//       onFieldChange,
//       onPaymentChange,
//       paymentType,
//       paymentTypes,
//       publicOffer,
//       submitOrderUrl,
//       totalCount,
//       totalPrice,
//     } = this.props;

//     return (
//       <section className="b-cart">
//         <div className="b-cart__content">
//           <CartTitle totalCount={totalCount} totalPrice={totalPrice} />
//           <Checkout
//             backUrl={backUrl}
//             coupon={coupon}
//             deliveryType={deliveryType}
//             deliveryTypes={deliveryTypes}
//             errorMessage={errorMessage}
//             fields={fields}
//             formAuthenticity={formAuthenticity}
//             onDeliveryChange={onDeliveryChange}
//             onFieldChange={onFieldChange}
//             onPaymentChange={onPaymentChange}
//             paymentType={paymentType}
//             paymentTypes={paymentTypes}
//             publicOffer={publicOffer}
//             submitOrderUrl={submitOrderUrl}
//           />
//         </div>
//       </section>
//     );
//   }
// }

// Cart.propTypes = {
//   backUrl: PropTypes.string,
//   coupon: schemas.checkoutCoupon,
//   deliveryType: schemas.deliveryType,
//   deliveryTypes: PropTypes.arrayOf(schemas.deliveryType),
//   errorMessage: PropTypes.string,
//   fields: PropTypes.array.isRequired,
//   formAuthenticity: schemas.formAuthenticity,
//   onDeliveryChange: PropTypes.func.isRequired,
//   onFieldChange: PropTypes.func.isRequired,
//   onPaymentChange: PropTypes.func.isRequired,
//   paymentType: schemas.paymentType,
//   paymentTypes: PropTypes.arrayOf(schemas.paymentType),
//   publicOffer: schemas.checkoutPublicOffer,
//   submitOrderUrl: PropTypes.string,
//   totalCount: PropTypes.number,
//   totalPrice: schemas.money,
// };

// export default Cart;