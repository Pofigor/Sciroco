/* eslint-disable react/prop-types */
const React = require('react');
const About = require('./About');
const Catalog = require('./Catalog');
const Layout = require('./Layout');
const Order = require('./Order');
const Article = require('./Article');

module.exports = function Home({ newUser, newUserRole }) {
  return (
    <Layout newUser={newUser} newUserRole={newUserRole}>
      <Article />
      <About />
      <Catalog />
      <Order newUser={newUser} />

    </Layout>
  );
};

