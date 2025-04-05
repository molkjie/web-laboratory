document.getElementById('load-orders').addEventListener('click', async () => {
  try {
    // Мок-дані замість реального API
    const mockData = {
      orders: [
        {
          id: 1,
          buyer_name: 'Олена Іваненко',
          buyer_phone: '+380987654321',
          total_price: 1200,
          status: 'new',
          items: [
            { name: 'Товар 1', quantity: 2, price: 300 },
            { name: 'Товар 2', quantity: 1, price: 600 },
          ],
        },
        {
          id: 2,
          buyer_name: 'Максим Сидоренко',
          buyer_phone: '+380666123456',
          total_price: 2300,
          status: 'processing',
          items: [
            { name: 'Товар 3', quantity: 1, price: 1500 },
            { name: 'Товар 4', quantity: 2, price: 400 },
          ],
        },
        {
          id: 3,
          buyer_name: '',
          buyer_phone: '',
          total_price: 890,
          status: 'delivered',
          items: [{ name: 'Товар 5', quantity: 1, price: 890 }],
        },
      ],
    };

    console.log('Мок-дані замовлень:', mockData);

    displayOrders(mockData.orders);
  } catch (error) {
    console.error('Помилка:', error);
    document.getElementById('orders').innerHTML =
      '<p style="color:red">Не вдалося отримати замовлення.</p>';
  }
});

function displayOrders(orders) {
  const ordersContainer = document.getElementById('orders');
  ordersContainer.innerHTML = '';

  if (!orders || orders.length === 0) {
    ordersContainer.innerHTML = '<p>Немає замовлень.</p>';
    return;
  }

  orders.forEach(order => {
    const orderEl = document.createElement('div');
    orderEl.classList.add('order');

    // Створюємо список товарів
    const itemsList = order.items
      .map(
        item => `
      <p><strong>${item.name}</strong> (x${item.quantity}) - ${item.price} грн</p>
    `,
      )
      .join('');

    orderEl.innerHTML = `
      <h3>Замовлення №${order.id}</h3>
      <p><strong>Ім’я клієнта:</strong> ${order.buyer_name || 'Невідомо'}</p>
      <p><strong>Телефон:</strong> ${order.buyer_phone || 'Немає телефону'}</p>
      <p><strong>Сума:</strong> ${order.total_price} грн</p>
      <p><strong>Статус:</strong> ${order.status}</p>
      <h4>Товари:</h4>
      <div class="order-items">${itemsList}</div>
    `;

    ordersContainer.appendChild(orderEl);
  });
}
