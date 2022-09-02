const React = require('react');
const Layout = require('./Layout');
const OrderItem = require('./OrderItem');

module.exports = function OrdersPage({ orders, newUser, newUserRole }) {
  return (
    <Layout newUser={newUser} newUserRole={newUserRole}>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" />
      <script src="/js/table2csv.min.js" />
      <script src="/js/tabletocsv.js" defer />
      <script src="/js/orders.js" defer />
      <h1 className="catalogTitle">Заказы:</h1>
      <div className="tableDiv">
        <table id="table" className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Дата</th>
              <th scope="col">Имя</th>
              <th scope="col">Email</th>
              <th scope="col">Телефон</th>
              <th scope="col">Описание заказа</th>
              <th scope="col">Эскиз</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => <OrderItem key={order.id} order={order} />)}
          </tbody>
        </table>
      </div>
      <button id="downloadcsv" className="btn btn-primary regBtn csvBtn" type="button">Экспорт в CSV</button>
    </Layout>
  );
};
