import React, { Component, PropTypes } from 'react';
import i18next from 'i18next';
import localeLanguages from '../../constants/localeLanguages';

const provideTranslations = (WrappedComponent) => {
  let i18n;

  class I18nextProvider extends Component {
    componentWillMount() {
      const locale = this.getLocale();
      const translations = this.getTranslations();

      this.i18n = i18next.createInstance({
        lng: locale,
        fallbackLng: 'ru',
        interpolationPrefix: '%{',
        interpolationSuffix: '}',
        resources: {
          [locale]: {
            translation: translations,
          }
        },
      }, () => {});
    }
    getChildContext() {
      return { i18n: this.i18n };
    }
    getLocale() {
      const { i18n } = this.props;

      if (i18n && i18n.locale) {
        return i18n.locale;
      }
      if (gon && gon.i18n && gon.i18n.locale) {
        return gon.i18n.locale;
      }

      return 'ru';
    }
    getTranslations() {
      const { i18n } = this.props;

      if (i18n && i18n.translations) {
        return i18n.translations;
      }
      if (gon && gon.i18n && gon.i18n.translations) {
        return gon.i18n.translations;
      }

      return {};
    }
    render() {
      return (
        <WrappedComponent {...this.props} ref="translatable" />
      );
    }
  }

  I18nextProvider.propTypes = {
    i18n: PropTypes.shape({
      locale: PropTypes.oneOf(localeLanguages).isRequired,
      translations: PropTypes.object.isRequired,
    }),
  };
  I18nextProvider.childContextTypes = {
    i18n: PropTypes.object.isRequired,
  };
  // I18nextProvider.defaultProps = {
  //   i18n: {
  //     locale: 'ru',
  //     translations: {},
  //   },
  // };
  I18nextProvider.defaultProps = {
    "i18n": {
      "locale": "ru",
      "translations": {
        "vendor": {
          "not_published": "Магазин временно не работает",
          "made_in_kiiiosk": "Сделано на «Киоске»",
          "entities": {
            "product": "%{count} item / товар",
            "product_plural_2": "%{count} items / товара",
            "product_plural_5": "%{count} items / товаров"
          },
          "badges": {
            "new": "New / Новинка",
            "sale_percent": "SALE - %{percent}%",
            "not_available": "Not for sale / Не продается",
            "sale": "SALE",
            "sold": "Preorder only / Предзаказ"
          },
          "search": {
            "results_title": "Результаты поиска (%{count})",
            "nothing_found": "К сожалению, ничего не найдено."
          },
          "seconds_count": "%{count} секунду",
          "seconds_count_plural_2": "%{count} секунды",
          "seconds_count_plural_5": "%{count} секунд",
          "errors": {
            "cart": {
              "empty": "Cart is empty / В корзине нет товаров"
            },
            "coupon": {
              "not_found": "Not found / Несуществующий промокод %{code}",
              "expired": "Outdated / Промокод просрочен %{code}"
            },
            "order": {
              "invalid_form": "Invalid / Заказ еще не принят, исправьте ошибки в форме"
            }
          },
          "placeholders": {
            "coupon": "Promo-code / Промо-код (если есть)",
            "search": "Search / Поиск"
          },
          "alerts": {
            "confirm": "Confirm / Подтвердить"
          },
          "flashes": {
            "good_added_to_basket": "Товар \"%{title}\" добавлен в корзину"
          },
          "mails": {
            "signature": "Peace and respect / С уважением, %{name}"
          },
          "auto_menu_items": {
            "blog": "Blog / Блог"
          },
          "top_banner": {
            "default_content": "Мы открылись!"
          },
          "order": {
            "fields": {
              "phone": "Phone / Телефон",
              "name": "Full Name / Полное имя",
              "email": "Email",
              "city_title": "City / Город доставки",
              "address": "Address / Адрес",
              "comment": "Comment / Комментарий",
              "coupon_code": "Cupon / Промокод"
            },
            "placeholders": {
              "city_title": "",
              "phone": "",
              "name": "",
              "address": "",
              "comment": "",
              "email": ""
            },
            "submit": "Submit / Оформить",
            "pickup_address": "Pickup at / Адрес самовывоза:",
            "title": "Order #{number} / Заказ №%{number}",
            "payment_type": "Payment type / Способ оплаты: %{title}",
            "delivery_type": "Delivery / Способ доставки: %{title}",
            "free_delivery_text_html": "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
            "checkout_free_delivery_text_html": "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
            "go_back": "Back / Назад",
            "next": "Continue / Продолжить",
            "delivery_tracking_id": "Tracking ID / Трекинг-номер доставки: %{number}",
            "check_state": "Check state / Статус доставки",
            "public_offer_accepted_html": "Agree with <a href=\"%{url}\" target=\"_blank\">terms</a> / Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
            "created": {
              "title": "Thank you / Спасибо за заказ",
              "desc_html": "We will get you asap. <br> Your phone %{phone} <br> Order %{link} Price %{price} / В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}"
            },
            "new": {
              "delivery_title": "Delivery type / Способ доставки",
              "payment_title": "Payment type / Способы оплаты",
              "contacts_title": "Contacts / Введите данные",
              "sum": "sum / на сумму"
            },
            "redirect": "Please wait for 5 seconds / В течение 5-и секунд вы будете переправлены на страницу оплаты",
            "redirecting": "Redirecting / Переправляю на сайт оплаты",
            "go_to_payment": "Go to payment / К оплате",
            "continue_shopping": "Go shopping / Продолжить покупки",
            "contents": "Order / Состав заказа:",
            "delivery_price": "Price / Стоимость доставки",
            "pay": "Pay / Оплатить"
          },
          "blog": {
            "read_more": "More / Читать далее..."
          },
          "notice": {
            "catalog_filter": {
              "selected_products": "Выбрано вариантов",
              "show_products": "Show / Показать"
            }
          },
          "coupon": {
            "discount": "Discount - %{discount}",
            "invalid": "Invalid / Купон \"%{value}\" НЕ действующий",
            "checking": "Checking / Проверяю..",
            "error": "Error. Try again. / Ошибка. Попробуйте еще раз"
          },
          "cart": {
            "basket_button": "Cart",
            "amount": "Amount / Количество",
            "overall": "Only / Итого:",
            "title": "Cart / Корзина",
            "clear": "Remove / Очистить",
            "not_available": "Not available / Не продается",
            "empty": "Empty / Ничего"
          },
          "wishlist": {
            "add_item": "Wish / Хочу",
            "wishlist_button": "Wishlist / Список желаний",
            "private_title": "Your wishlist / Ваш список желаний",
            "foreign_title": "Other's wishlist / Чей-то список желаний",
            "empty": "Empty / Пока тут ничего нет"
          },
          "packaging": {
            "add": "Add / Добавить",
            "add_gift_package": "Add / Добавить к заказу",
            "no_package": "Don't add / Не добавлять"
          },
          "payment": {
            "w1": {
              "failure": {
                "title": "Sorry, it's a fail / Оплата не прошла",
                "desc": "Payment fail / Оплата заказа не была произведена"
              },
              "success": {
                "title": "Thank you / Спасибо за заказ",
                "desc": "Оплата заказа была произведена"
              }
            }
          },
          "category": {
            "continue_shopping": "Go shopping / Продолжить",
            "empty": "Empty / Ничего"
          },
          "dictionary_entity": {
            "continue_shopping": "Continue shopping / Продолжить покупки",
            "empty": "Empty / Ничего"
          },
          "similar_product": {
            "title": "More / Другие украшения"
          },
          "product": {
            "title": "Товар",
            "blank_price": "Цена неизвестна",
            "run_out": "Нет в наличии",
            "not_available": "hello@w-o.im",
            "available": "Можно купить",
            "sold_out_message_html": "&laquo;%{title}&raquo; сейчас не продается",
            "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.",
            "category_title": "Категория",
            "show_other_products": "Посмотреть другие товары",
            "show_all": "Показать все"
          },
          "properties": {
            "empty": "Нет характеристик для вывода"
          },
          "property": {
            "unknown_type": "Неизвестный тип характеристики",
            "defaults": {
              "size": "Размер",
              "color": "Цвет"
            }
          },
          "pages": {
            "titles": {
              "cart": "Cart / Корзина",
              "order": "Order / Оформление заказа",
              "payment": "Payment / Оплата",
              "payment_success": "Success / Успех",
              "payment_error": "Payment error / Ошибка оплаты"
            }
          },
          "filter": {
            "availability": "Availabillity / Доступность",
            "price_range": "Ценовой диапазон",
            "selected_options": {
              "availability": "Доступность",
              "price_range": "Цена от %{from} до %{to} %{currency}"
            },
            "selected_availability": {
              "all": "Все",
              "available": "В наличии",
              "run_out": "Под заказ",
              "sale": "Распродажа",
              "unknown": "unknown"
            }
          },
          "button": {
            "to_cart": "Add / В корзину",
            "select_good": "Select / Выбрать",
            "go_wishlist": "Go to Wishlist / Перейти в \"Список желаний\"",
            "to_wishlist": "Wish / Хочу",
            "already": "Added / Уже в корзине",
            "disable_with": {
              "sending": "Sending / Отправляем...",
              "saving": "Saving / Сохраняем...",
              "waiting": "Wait / Подождите...",
              "adding": "Adding / Добавляем..."
            }
          },
          "products": {
            "nothing_found_by_criteria": "По данным критериям ничего не найдено"
          },
          "client": {
            "auth": "My page / Мой кабинет",
            "no_account": "Sign up / Нет аккаунта?",
            "logged_in_with": "You logged as <br /> <b>%{name}</b>. / Вы уже авторизованы под именем<br /> <b>%{name}</b>.",
            "continue_logged": "My name / Продолжить под этим именем..",
            "create_account": "Create / Создать",
            "logout": "Log out / Выйти",
            "cabinet": {
              "title": "My page / Моя страница",
              "button": "My page / Мой кабинет",
              "create": "Create my page / Создаем мою страницу",
              "send_pin_code": "Send my pin / Выслать пин-код",
              "disable_with": "Sending / Высылаем..."
            }
          },
          "money": {
            "unknown_iso_code": "Unknown currency %{isoCode} / Неизвестный тип валюты %{isoCode}"
          }
        }
      }
    }
  };

  return I18nextProvider;
};

export default provideTranslations;


// export default (WrappedComponent) => {
//   let i18n;

//   class I18nextProvider extends Component {
    // componentWillMount() {
    //   const locale = this.getLocale();
    //   const translations = this.getTranslations();

    //   this.i18n = i18next.createInstance({
    //     lng: locale,
    //     fallbackLng: 'ru',
    //     interpolationPrefix: '%{',
    //     interpolationSuffix: '}',
    //     resources: {
    //       [locale]: {
    //         translation: translations,
    //       }
    //     },
    //   }, () => {});
    // }
//     getChildContext() {
//       return { i18n: this.i18n };
//     }
//     getLocale() {
//       const { i18n } = this.props;

//       if (i18n && i18n.locale) {
//         return i18n.locale;
//       }
//       if (gon && gon.i18n && gon.i18n.locale) {
//         return gon.i18n.locale;
//       }

//       return 'ru';
//     }
//     getTranslations() {
//       const { i18n } = this.props;

//       if (i18n && i18n.translations) {
//         return i18n.translations;
//       }
//       if (gon && gon.i18n && gon.i18n.translations) {
//         return gon.i18n.translations;
//       }

//       return {};
//     }
//     render() {
//       return (
//         <WrappedComponent {...this.props} ref="translatable" />
//       );
//     }
//   }

//   I18nextProvider.childContextTypes = {
//     i18n: PropTypes.object.isRequired
//   };
//   I18nextProvider.propTypes = {
//     i18n: PropTypes.shape({
//       locale: PropTypes.oneOf(localeLanguages).isRequired,
//       translations: PropTypes.object.isRequired,
//     }),
//   };

//   return I18nextProvider;
// }