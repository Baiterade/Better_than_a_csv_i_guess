const { Post } = require('../models');

const postdata = [
  {
    authorId: 1,
    title: 'Test #1',
    body: 'This is a test body! Wow! So cool!',
  },
  {
    authorId: 1,
    title: 'Test #2',
    body: 'This is a test body! Wow! So cool!',
  },
  {
    authorId: 1,
    title: 'Test #3',
    body: 'This is a test body! Wow! So cool!',
  },
  {
    authorId: 1,
    title: 'Test #4',
    body: 'This is a test body! Wow! So cool!',
  },
  {
    authorId: 1,
    title: 'Test #5',
    body: 'This is a test body! Wow! So cool!',
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
