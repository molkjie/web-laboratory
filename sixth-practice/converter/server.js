const express = require('express');
const cors = require('cors');

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Додаємо маршрут для кореневого запиту
app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

// Основний маршрут для API
app.get('/exchange-rates', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
