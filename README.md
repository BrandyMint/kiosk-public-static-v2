[![Build Status](https://travis-ci.org/BrandyMint/kiosk-public-static-v2.svg?branch=master)](https://travis-ci.org/BrandyMint/kiosk-public-static-v2)
Развертывание проекта
---------------------
 
* Установка nvm (пропустить если уже установлен) 

  [nvm installation](https://github.com/creationix/nvm#installation)

* Установка нужной версии node/npm

  ```sh
  nvm install 5.4
  nvm use 5.4
  ```

* Установка зависимостей

  ```sh
  npm install -g gulp, bower
  npm install
  bower install
  ```


Запуск
------

  ```sh
  npm run start
  ```

Публикация
----------

  ```sh
  npm run deploy
  ```


Сборка бандла
-------------

  ```sh
  gulp dist
  ```

Процесс gulp
------------

1. Исходник `./scripts/main.coffee` билдится с помощью `browserify` и превращается в `./scripts/bundle.js`
2. Стиль `./stylesheepts/app.sass` собирается в `./stylesheets/app.css`
с помощью gulp-sass (node-sass, libsass).
3. Сторонние пакеты устанавливаются через bundle в `app/bower_components` и билдятся в `./scripts/vendor.js`

Управление кастомным шрифтом с иконками
---------------------------------------

1. Иконки выбираем тут http://www.flaticon.com/
2. Понравившиеся иконки качаем в svg, и импортируем в https://icomoon.io/app
3. Если подобной иконки в шрифте не было, то её код это код последней иконки в нашем шрифте + 1
4. Если иконка уже есть в шрифте и мы хотим заменить её новой, то перед генерацией шрифта в icomoon перетаскиваем новую иконку вместо старой, а старую удаляем. Даём ей такое же название, код и сохраняем шрифт.
5. Распаковываем архив со шрифтом. Файлы eot, svg, ttf, woff кладём в `./app/fonts`, если появилась новая иконка, добавляем её в конец `./app/stylesheets/fonts/KioskPublicIcons.sass`
6. Заменяем `./app/stylesheets/fonts/selection.json` новым из архива.

Сбор фикстур для тестов и примеров компонентов
----------------------------------------------

Предварительно на сайте собираем необходимое состояние компонента (пока вручную). Затем переходим на страницу содержащую компонент. В девелоперской консоли браузера выполняем код:

  ```sh
  JSON.stringify(JSON.parse(document.querySelector('[data-react-props=<Имя компонента>]').getAttribute('data-react-props')), null, 2)
  ```

Ограничение по браузерам:
------------------------

Текущие ограничения:

* Firefox >=25
* IE10+
* Opera 12+
* Chrome >=27
* Safari >-6
* Mobile Safair on iPhone and iPad >= 6

Ограничения для приложения в целом устанавливаются согласно максимальным ограничениям компонентов.

## ReactJS

* IE >= 9, Chrome >= 27, Firefox >= 25, Safari >= 6 and Mobile Safari on iPhone and iPad >= 6

## jQueryFileUpload:

https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support

### Desktop browsers

* Google Chrome
* Apple Safari 4.0+
* Mozilla Firefox 3.0+
* Opera 11.0+
* Microsoft Internet Explorer 6.0+

### Mobile browsers

* Apple Safari on iOS 6.0+
* Google Chrome on iOS 6.0+
* Google Chrome on Android 4.0+
* Default Browser on Android 2.3+
* Opera Mobile 12.0+

## HTML5 FileReader
 
* Firefox 3.6+, IE10+, and Opera 12+.# react-i18next-support
