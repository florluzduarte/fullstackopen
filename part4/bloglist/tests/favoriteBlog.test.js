const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');
const lists = require('./bloglistsDataForTesting');

describe('favoriteBlog', () => {
  test('of empty blog list is {}', () => {
    const blogs = [];
    const result = listHelper.favoriteBlog(blogs);
    assert.deepStrictEqual(result, {});
  });

  test('of list with one item is item', () => {
    const result = listHelper.favoriteBlog(lists.listWithOneBlog);
    assert.deepStrictEqual(result, {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0,
    });
  });

  test('of long list is calculated right', () => {
    const result = listHelper.favoriteBlog(lists.listWithMultipleBlogs);
    assert.deepStrictEqual(result, {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0,
    });
  });
});
