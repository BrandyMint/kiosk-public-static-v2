global.gon = {
  default_logo_url: 'http://assets.kiiiosk.ru/assets/fallback/product-none.png',
  fallback_product_image_url: 'http://assets.kiiiosk.ru/assets/fallback/product-none.png',
  env: 'development',
  kiiiosk: true,
  i18n: {
    locale: "ru",
    translations: {
      vendor: {
        not_published: "Магазин временно не работает",
        made_in_kiiiosk: "Сделано на «Киоске»",
        badges: {
          new: "Новинка",
          sale_percent: "SALE - %{percent}%",
          not_available: "Не продается",
          sale: "SALE",
          sold: "Продано"
        },
        search: {
          results_title: "Результаты поиска (%{count})",
          nothing_found: "К сожалению, ничего не найдено."
        },
        errors: {
          cart: {
            empty: "В корзине нет товаров"
          },
          coupon: {
            not_found: "Несуществующий промокод %{code}",
            expired: "Промокод просрочен %{code}"
          }
        },
        placeholders: {
          coupon: "Промо-код (если есть)",
          search: "Поиск"
        },
        alerts: {
          confirm: "Точно очистить?"
        },
        flashes: {
          good_added_to_basket: "Товар \"%{title}\" добавлен в корзину"
        },
        mails: {
          signature: "С уважением, интернет-магазин \"%{name}\""
        },
        auto_menu_items: {
          blog: "Блог"
        },
        top_banner: {
          default_content: "Мы открылись!"
        },
        entities: {
          product: '%{count} товар',
          product_plural_2: '%{count} товара',
          product_plural_5: '%{count} товаров'
        },
        order: {
          fields: {
            phone: "Телефон",
            name: "Полное имя",
            email: "Email",
            city_title: "Город доставки",
            address: "Адрес доставки",
            comment: "Комментарий",
            coupon_code: "Промокод"
          },
          submit: "Оформить заказ",
          pickup_address: "Адрес самовывоза:",
          title: "Заказ №%{number}",
          payment_type: "Способ оплаты: %{title}",
          delivery_type: "Способ доставки: %{title}",
          free_delivery_text_html: "Бесплатная доставка при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          checkout_free_delivery_text_html: "Бесплатно при заказе свыше <nobr>%{free_delivery_threshold}</nobr>",
          go_back: "Вернуться назад",
          next: "Продолжить",
          delivery_tracking_id: "Трекинг-номер доставки: %{number}",
          check_state: "Проверить статус доставки",
          public_offer_accepted_html: "Согласен с условиями <u><a href=\"%{url}\" target=\"_blank\">публичной оферты</a></u>",
          created: {
            title: "Спасибо за заказ",
            desc_html: "В ближайшее время менеджер свяжется с вами для подтверждения заказа. <br> Ваш телефон %{phone} <br> Ваш заказ %{link} на сумму %{price}\n"
          },
          new: {
            delivery_title: "Выберите тип доставки.",
            payment_title: "Способы оплаты",
            contacts_title: "Введите данные",
            sum: "на сумму"
          },
          "redirect": "В течение 5-и секунд вы будете переправлены на страницу оплаты.",
          "redirecting": "Переправляю на сайт оплаты",
          "go_to_payment": "Перейти к оплате",
          "continue_shopping": "Продолжить покупки"
        },
        "notice": {
          "catalog_filter": {
            "selected_products": "Выбрано вариантов",
            "show_products": "Показать",
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
          },
          "order_payment_yandex_kassa": {
            "payment_methods": {
              "ac": "Оплата с произвольной банковской карты"
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
          "not_available": "Не продается",
          "available": "Можно купить",
          "sold_out_message_html": "&laquo;%{title}&raquo; сейчас не продается",
          "nothing_found_by_criteria": "Сожалеем, ничего не найдено. Попробуйте изменить критерии поиска.",
          "category_title": "Категория",
          "show_other_products": "Посмотреть другие товары",
          "show_all": "Показать все",
          "weight": "Вес",
          "kg": "кг."
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
          "go_wishlist": 'Перейти в "Список желаний"',
          "to_cart": "В корзину",
          "to_wishlist": 'Добавить в "Список желаний"',
          "select_good": "Выберите характеристику",
          "disable_with": {
            "sending": "Отправляем...",
            "saving": "Сохраняем...",
            "waiting": "Подождите...",
            "adding": "Добавляем..."
          }
        },
        "money": {
          "unknown_iso_code": "Неизвестный тип валюты %{isoCode}"
        }
      }
    }
  },
  accounting_settings: {
    currency: {
      symbol: 'руб.',
      format: '%v %s',
      decimal: ',',
      thousand: ' ',
      precision: 2
    },
    number: {
      precision: 0,
      thousand: ' ',
      decimal: ','
    }
  },
  root_url: 'http://wannabe.3001.vkontraste.ru',
  public_api_url: 'http://wanna-be.ru/api',
  operator_api_url: 'http://wannabe.3001.vkontraste.ru/operator/api',
  __data: {
    design: {
      activeElementsColor: '#000000',
      mainPageProductsInRow: 2,
      mainPageRows: 5,
      mainPageInstagram: true,
      mainPageSlider: false,
      mainPageBanner: true,
      mainPageFilter: true,
      categoryPageProductsInRow: 2,
      categoryPageRows: 5,
      categoryPageFilter: true,
      productPagePhoto: 'aside',
      showSimilarProducts: true,
      // productPageSimilarProducts: 'off',
      logoUrl: null,
      pageBgUrl: null,
      pageBgColor: '#6c7a89',
      feedBgColor: '#000000',
      feedTransparency: .7,
      fontColor: '#000000',
      fontFamily: 'helvetica',
      fontSize: 'md',
    },
  },
  thumbor_url: 'http://thumbor.kiiiosk.ru',
}
