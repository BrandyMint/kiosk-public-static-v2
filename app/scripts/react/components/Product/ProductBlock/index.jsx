import React, { Component, PropTypes } from 'react';
import makeTranslatable from '../../HoC/makeTranslatable';
import ProductBlockImage from './ProductBlockImage';
import ProductBlockBadges from './ProductBlockBadges';
import ProductPrices from '../ProductPrices';

class ProductBlock extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="b-item-list__item">
        <a className="b-item" href={product.public_url}>
          <div className="b-item__pic-wrap">
            <ProductBlockImage product={product} />
            <ProductBlockBadges product={product} />
          </div>
          <div className="b-item__info">
            <h2 className="b-item__name">
              {product.title}
            </h2>
            {!!product.short_details &&
              <div className="b-item__details">
                {product.short_details}
              </div>
            }
            <ProductPrices product={product} />
          </div>
        </a>
      </div>
    );
  }
}

ProductBlock.propTypes = {
  product: PropTypes.object.isRequired,
};
ProductBlock.defaultProps = {
  "product": {
    "id": 20868,
    "title": "Кафф-2 с цирконами черненый р",
    "is_sale": true,
    "has_ordering_goods": true,
    "is_label_new": false,
    "is_run_out": false,
    "is_sold": false,
    "index_image": {
      "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/6952/53629963-d867-470c-afb2-cd3335fee5a3.png",
      "width": 1946,
      "height": 1946
    },
    "second_image": {
      "url": "http://assets.kiiiosk.ru/uploads/shop/5/uploads/product_image/image/38606/53e97c2d-ad9b-4ad9-b916-4b6675def763.jpg",
      "width": 600,
      "height": 600
    },
    "public_url": "http://wanna-be.ru/products/20868-kaff-2-s-tsirkonami-chernenyy-r",
    "short_details": null,
    "goods": [
      {
        "id": 17100,
        "type": "ProductItem",
        "is_sale": true,
        "price": {
          "cents": 170000,
          "currency_iso_code": "RUB"
        },
        "actual_price": {
          "cents": 85000,
          "currency_iso_code": "RUB"
        }
      }
    ]
  },
  "i18n": {
    "locale": "ru",
    "translations": {
      "vendor": {
        "not_published": "Магазин временно не работает",
        "made_in_kiiiosk": "Сделано на «Киоске»",
        "entities": {
          "product": "%{count} товар",
          "product_plural_2": "%{count} товара",
          "product_plural_5": "%{count} товаров"
        },
        "badges": {
          "new": "Новинка",
          "sale_percent": "SALE - %{percent}%",
          "not_available": "Не продается",
          "sale": "SALE",
          "sold": "Уточните наличие в наших магазинах"
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
            "empty": "В корзине нет товаров"
          },
          "coupon": {
            "not_found": "Несуществующий промокод %{code}",
            "expired": "Промокод просрочен %{code}"
          },
          "order": {
            "invalid_form": "Закакз еще не принят, исправьте ошибки в форме"
          }
        },
        "placeholders": {
          "coupon": "Промо-код (если есть)",
          "search": "Поиск"
        },
        "alerts": {
          "confirm": "Точно очистить?"
        },
        "flashes": {
          "good_added_to_basket": "Товар \"%{title}\" добавлен в корзину"
        },
        "mails": {
          "signature": "С уважением, интернет-магазин \"%{name}\""
        },
        "auto_menu_items": {
          "blog": "Блог"
        },
        "top_banner": {
          "default_content": "Мы открылись!"
        },
        "order": {
          "fields": {
            "phone": "Телефон",
            "name": "Имя Отчество Фамилия",
            "email": "Email",
            "city_title": "Город доставки",
            "address": "Адрес доставки",
            "comment": "Комментарий",
            "coupon_code": "Промокод"
          },
          "placeholders": {
            "city_title": "Москва",
            "phone": "Например, +7 913 123 32 10",
            "name": "Ф.И.О.",
            "address": "Например, Академика Вавилова 12-10",
            "comment": "О чем нам нужно знать",
            "email": "Email"
          },
          "submit": "Оформить заказ",
          "pickup_address": "Адрес самовывоза:",
          "title": "Заказ №%{number}",
          "payment_type": "Способ оплаты: %{title}",
          "delivery_type": "Способ доставки: %{title}",
          "free_delivery_text_html": "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "checkout_free_delivery_text_html": "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          "go_back": "Вернуться назад",
          "next": "Продолжить",
          "delivery_tracking_id": "Трекинг-номер доставки: %{number}",
          "check_state": "Проверить статус доставки",
          "public_offer_accepted_html": "Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
          "created": {
            "title": "Спасибо за заказ",
            "desc_html": "В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n"
          },
          "new": {
            "delivery_title": "Выберите тип доставки.",
            "payment_title": "Способы оплаты",
            "contacts_title": "Введите данные",
            "sum": "на сумму"
          },
          "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.",
          "redirecting": "Переправляю на сайт оплаты",
          "go_to_payment": "Перейти к оплате",
          "continue_shopping": "Продолжить покупки",
          "contents": "Состав заказа:",
          "delivery_price": "Стоимость доставки",
          "pay": "Оплатить"
        },
        "blog": {
          "read_more": "Читать далее.."
        },
        "notice": {
          "catalog_filter": {
            "selected_products": "Выбрано вариантов",
            "show_products": "Показать"
          }
        },
        "coupon": {
          "discount": "Скидка - %{discount}",
          "invalid": "Купон \"%{value}\" НЕ действующий",
          "checking": "Проверяю купон..",
          "error": "Ошибка при проверке купона. Попробуйте еще раз"
        },
        "cart": {
          "basket_button": "Корзина",
          "amount": "Количество",
          "overall": "Итого:",
          "title": "Корзина",
          "clear": "Очистить корзину",
          "not_available": "Больше не продается",
          "empty": "Пока тут ничего нет"
        },
        "wishlist": {
          "add_item": "Добавить в список желаний",
          "wishlist_button": "Список желаний",
          "private_title": "Ваш список желаний",
          "foreign_title": "Чей-то список желаний",
          "empty": "Пока тут ничего нет"
        },
        "packaging": {
          "add": "Добавить",
          "add_gift_package": "Добавить к заказу",
          "no_package": "Не добавлять"
        },
        "payment": {
          "w1": {
            "failure": {
              "title": "Оплата не прошла",
              "desc": "Оплата заказа не была произведена"
            },
            "success": {
              "title": "Спасибо за заказ",
              "desc": "Оплата заказа была произведена"
            }
          }
        },
        "category": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "dictionary_entity": {
          "continue_shopping": "Продолжить покупки",
          "empty": "Ой, а здесь ничего нет. Пока."
        },
        "similar_product": {
          "title": "С этим товаром покупают также"
        },
        "product": {
          "title": "Товар",
          "blank_price": "Цена неизвестна",
          "run_out": "Нет в наличии",
          "not_available": "Уточните в магазине",
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
            "cart": "Корзина",
            "order": "Оформление заказа",
            "payment": "Оплата",
            "payment_success": "Успешная оплата",
            "payment_error": "Ошибка оплаты"
          }
        },
        "filter": {
          "availability": "Доступность",
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
          "to_cart": "В корзину",
          "select_good": "Выберите характеристику",
          "go_wishlist": "Перейти в \"Список желаний\"",
          "to_wishlist": "Хочу!",
          "already": "Уже в корзине",
          "disable_with": {
            "sending": "Отправляем...",
            "saving": "Сохраняем...",
            "waiting": "Подождите...",
            "adding": "Добавляем..."
          }
        },
        "products": {
          "nothing_found_by_criteria": "По данным критериям ничего не найдено"
        },
        "client": {
          "auth": "Личный кабинет",
          "no_account": "Нет аккаунта?",
          "logged_in_with": "Вы уже авторизованы под именем<br /> <b>%{name}</b>.",
          "continue_logged": "Продолжить под этим именем..",
          "create_account": "Создать",
          "logout": "Выйти",
          "cabinet": {
            "title": "Личный кабинет",
            "button": "Кабинет",
            "create": "Создаем личный кабинет",
            "send_pin_code": "Выслать пин-код",
            "disable_with": "Высылаем..."
          }
        },
        "money": {
          "unknown_iso_code": "Неизвестный тип валюты %{isoCode}"
        },
        "add_gift_package": "Добавить подарочную коробку",
        "no_package": "Без упаковки"
      }
    }
  },
  "formAuthenticity": {
    "token": "la7oNKa4YajgkVRHV0bur7TS+rnkZgxhfc6WgCZGLFA=",
    "field": "authenticity_token"
  }
}

export default makeTranslatable(ProductBlock);