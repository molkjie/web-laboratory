document
  .getElementById('converter')
  .addEventListener('submit', async function (e) {
    e.preventDefault();

    const from = document.getElementById('from').value.toUpperCase();
    const to = document.getElementById('to').value.toUpperCase();
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').innerText = 'Введіть правильну суму!';
      return;
    }

    if (from === to) {
      document.getElementById(
        'result',
      ).innerText = `Результат: ${amount} ${to}`;
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/exchange-rates');
      const data = await res.json();

      // Створюємо об'єкт курсів для швидкого доступу
      const rates = {
        UAH: { buy: 1, sale: 1 }, // UAH дорівнює самій собі
      };

      data.forEach(rate => {
        rates[rate.ccy] = {
          buy: parseFloat(rate.buy),
          sale: parseFloat(rate.sale),
        };
      });

      if (!rates[from] || !rates[to]) {
        throw new Error('Немає курсу для обраної валюти');
      }

      let result;

      if (from === 'UAH') {
        result = amount / rates[to].sale; // Купуємо валюту за курсом продажу
      } else if (to === 'UAH') {
        result = amount * rates[from].buy; // Продаємо валюту за курсом купівлі
      } else {
        // Конвертація між двома валютами через UAH
        const uahAmount = amount * rates[from].buy; // Переводимо в UAH
        result = uahAmount / rates[to].sale; // Потім в цільову валюту
      }

      document.getElementById(
        'result',
      ).innerText = `Результат: ${amount} ${from} → ${result.toFixed(2)} ${to}`;
    } catch (err) {
      document.getElementById('result').innerText =
        'Помилка при обробці запиту.';
      console.error('Помилка:', err);
    }
  });
