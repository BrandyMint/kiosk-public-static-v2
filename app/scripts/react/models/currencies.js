// Source: https://www.omniref.com/ruby/gems/money/6.6.1/files/config/currency_iso.json

const currencies = {
  "byr": {
    "priority": 100,
    "iso_code": "BYR",
    "name": "Belarusian Ruble",
    "symbol": "Br",
    "disambiguate_symbol": "BYR",
    "alternate_symbols": ["бел. руб.", "б.р.", "руб.", "р."],
    "subunit": null,
    "subunit_to_unit": 1,
    "symbol_first": false,
    "html_entity": "",
    "decimal_mark": ",",
    "thousands_separator": " ",
    "iso_numeric": "974",
    "smallest_denomination": 50
  },
  "eur": {
    "priority": 2,
    "iso_code": "EUR",
    "name": "Euro",
    "symbol": "€",
    "alternate_symbols": [],
    "subunit": "Cent",
    "subunit_to_unit": 100,
    "symbol_first": true,
    "html_entity": "&#x20AC;",
    "decimal_mark": ",",
    "thousands_separator": ".",
    "iso_numeric": "978",
    "smallest_denomination": 1
  },
  "kzt": {
    "priority": 100,
    "iso_code": "KZT",
    "name": "Kazakhstani Tenge",
    "symbol": "〒",
    "alternate_symbols": [],
    "subunit": "Tiyn",
    "subunit_to_unit": 100,
    "symbol_first": false,
    "html_entity": "",
    "decimal_mark": ".",
    "thousands_separator": ",",
    "iso_numeric": "398",
    "smallest_denomination": 100
  },
  "rub": {
    "priority": 100,
    "iso_code": "RUB",
    "name": "Russian Ruble",
    "symbol": "₽",
    "alternate_symbols": ["руб.", "р."],
    "subunit": "Kopeck",
    "subunit_to_unit": 100,
    "symbol_first": false,
    "html_entity": "&#x20BD;",
    "decimal_mark": ",",
    "thousands_separator": ".",
    "iso_numeric": "643",
    "smallest_denomination": 1
  },
  "uah": {
    "priority": 100,
    "iso_code": "UAH",
    "name": "Ukrainian Hryvnia",
    "symbol": "₴",
    "alternate_symbols": [],
    "subunit": "Kopiyka",
    "subunit_to_unit": 100,
    "symbol_first": false,
    "html_entity": "&#x20B4;",
    "decimal_mark": ".",
    "thousands_separator": ",",
    "iso_numeric": "980",
    "smallest_denomination": 1
  },
  "usd": {
    "priority": 1,
    "iso_code": "USD",
    "name": "United States Dollar",
    "symbol": "$",
    "alternate_symbols": ["US$"],
    "subunit": "Cent",
    "subunit_to_unit": 100,
    "symbol_first": true,
    "html_entity": "$",
    "decimal_mark": ".",
    "thousands_separator": ",",
    "iso_numeric": "840",
    "smallest_denomination": 1
  },
  "tjs": {
    "priority": 100,
    "iso_code": "TJS",
    "name": "Tajikistani Somoni",
    "symbol": "ЅМ",
    "alternate_symbols": ["ЅМ"],
    "subunit": "Diram",
    "subunit_to_unit": 100,
    "symbol_first": false,
    "html_entity": "",
    "decimal_mark": ".",
    "thousands_separator": ",",
    "iso_numeric": "972",
    "smallest_denomination": 1
  },
  "zar": {
    "priority": 100,
    "iso_code": "ZAR",
    "name": "South African Rand",
    "symbol": "R",
    "alternate_symbols": ["R"],
    "subunit": "Cent",
    "subunit_to_unit": 100,
    "symbol_first": true,
    "html_entity": "&#x0052;",
    "decimal_mark": ".",
    "thousands_separator": ",",
    "iso_numeric": "710",
    "smallest_denomination": 10
  }
};

export default currencies;