const { Comment } = require('../models');

const commentData = [
  {
    user_name: 'awesomeGuy789',
    comment: 'Dude honestly, same.',
    comment_date: 'March 30, 2018',
    post_id: '1',
  },
  {
    user_name: 'NotawesomeGuy789',
    comment: 'Dude honestly, same.',
    comment_date: 'March 30, 2018',
    post_id: '2',
  },
  {
    user_name: 'TotallyawesomeGuy789',
    comment: 'Dude honestly, same.',
    comment_date: 'March 30, 2018',
    post_id: '3',
  },
  {
    user_name: 'KindAawesomeGuy789',
    comment: 'Dude honestly, same.',
    comment_date: 'March 30, 2018',
    post_id: '4',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
