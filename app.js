// Фреймворк веб-приложений.
const express = require("express");
const app = express();

// CORS 
cors = require('cors'); 
app.use(cors());

// Логгирование деталей запросов.
const morgan = require("morgan");
app.use(morgan("dev"));

const path = require('path');

// urlencoded // json.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Импорт маршрутов.
const indexRouter = require("./routes/index");

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем views(hbs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);

// Обработка ошибок.
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;