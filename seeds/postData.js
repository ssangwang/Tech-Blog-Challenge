const { Post } = require('../models');

const postData = [
  {
    title: 'Random Thoughts',
    username: 'pickleRick1111',
    post_date: 'April 20, 2021 07:00:00',
    post_body: 'Sometimes I like to eat pickles in the bathtub....'
  },
  {
    title: 'Random Tech',
    username: 'appleRick1235',
    post_date: 'April 21, 2021 07:00:00',
    post_body: 'Sometimes I like to eat apples in the bathtub....'
  },
  {
    title: 'Random 2',
    username: 'bananaRick69',
    post_date: 'April 22, 2021 07:00:00',
    post_body: 'Sometimes I like to eat bananas in the bathtub....'
  },
  {
    title: 'Random 3',
    username: 'onionRick785',
    post_date: 'April 23, 2021 07:00:00',
    post_body: 'Sometimes I like to eat onions in the bathtub....'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
