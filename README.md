# Pages — Bookstore SPA

Многостраничный лендинг книжного магазина. Портфолио-проект: компонентная архитектура, адаптивная вёрстка, валидация форм через composables.

## Ссылки

- **Демо:** https://pvo83.github.io/Pages/
- **Репозиторий:** https://github.com/pVo83/Pages

## Стек

- **Vue 3** — Composition API (`<script setup>`)
- **Vue Router 4** — клиентский роутинг, страница 404
- **SCSS** — BEM, scoped-стили, адаптивные миксины
- **Vite** — сборка проекта
- **Axios** — HTTP-клиент (mock API через jsonplaceholder)
- **GitHub Actions** — автоматический деплой на GitHub Pages

## Страницы

| Маршрут | Описание |
| --- | --- |
| `/#/` | Главная — hero, автор, преимущества, отзывы, статьи |
| `/#/about` | О нас — история, миссия, команда |
| `/#/articles` | Статьи и подборки |
| `/#/our-store` | Каталог книг с фильтрами и пагинацией |
| `/#/contacts-us` | Форма обратной связи, контакты, FAQ, карта |
| `/#/shipping` | Доставка и возврат |
| `/#/privacy` | Политика конфиденциальности |
| `*` | 404 Not Found |

> Роутинг в hash-режиме (`/#/...`) — стандартное решение для GitHub Pages.

## Возможности

- Composables: `useContactForm`, `useSubscribeForm`, `useBodyLock`, `useMenuResize`, `useScrolled`, `useStoreFilters`
- Мобильное меню с анимацией бургера
- Форма обратной связи с валидацией полей и состоянием `touched`
- Форма подписки с проверкой email
- Адаптив: desktop first (1440 → 1024 → 768 → 375px)

## Запуск локально

```sh
npm install
npm run dev
```

Сайт откроется по адресу: http://localhost:5174/Pages/

## Сборка

```sh
npm run build
```

## Линтеры

```sh
npm run lint
npm run stylelint:fix
```

## Деплой

После `git push` в ветку `main` сайт автоматически собирается и публикуется через GitHub Actions.

## Примечание

Форма обратной связи отправляет данные на [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) — это mock API, реальные данные не сохраняются.
