# DRAG & DROP system
## Описание проекта

Конструктор базы данных Вашего приложения. С помощью этой системы можно сформировать удаленную базу данных вашего backend-приложения и подключить его к фронту.<br>
Это демо-версия проекта и в ней продемонстрирована только часть функционала. В боевой версии есть личный кабинет с историей созданных таблиц, по каждой из которых доступен набор API. Также есть возможность формирования справочников для выпадающих списков и формировать связные таблицы 

## Демонстрация
Кликните для просмотра видео!
[![Watch the video](https://user-images.githubusercontent.com/55738777/174266971-b2c80cae-2121-40c1-a0a1-e2e7551b94d9.png)](https://user-images.githubusercontent.com/55738777/174265075-b4a164ff-4d98-4f8f-b370-2c4ed3c22fa1.mp4)
## Запуск проекта
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

### Технологии
```
VUE.JS
SCSS
Docker
LARAVEL(backend)
```
