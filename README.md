# Factory-New
Портал для фанатов киберспортивных турниров CS:GO

#### Использованный стек технологий
>Уровень backend построен на [Node.js](https://nodejs.org/en/) [express](http://expressjs.com/).

>Уровень frontend построен на [Angular 5](https://angular.io/).

Все веб-интерфейсы системы должны быть адаптированы для отображения в 3 режимах:

* "Десктопный" - для устройств, ширина экрана которых равна или превышает 1208 пикселей.

* "Планшетный" - для устройств, ширина экрана которых равна или превышает 727, но меньше 1208 пикселей.

* "Мобильный"- для устройств, ширина экрана которых меньше 727 пикселей.

>Взаимодействие между уровнями backend и frontend организовано посредством REST API.

>Для доступа к БД используется ORM - [Sequelize](https://github.com/sequelize/sequelize).

>Для взаимодействия с Telegram-ботом используется [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api).

>Для авторизации через социальные сети (ВК) используется [passport-vkontakte](https://github.com/stevebest/passport-vkontakte).

## Быстрый старт
Необходимо скачать и установить [Node.js](https://nodejs.org/en/)

Скачать, либо клонировать (git clone) данный репозиторий.

Открыть директорию, в котрой присутствует файл package.json

Установить все зависимости через консоль:

```bash
$ npm install
```

Установить angular/cli:

```bash
$ npm install @angular/cli -g
```

Создать файл .env в корне проекта и указать токен от бота и секретный ключ для доступа к ВК

Запустить сервер:

```bash
$ npm start
```