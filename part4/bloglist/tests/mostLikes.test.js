const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');
const lists = require('./bloglistsDataForTesting');

describe('mostLikes', () => {
  test('top liked author', () => {
    const result = listHelper.mostLikes(lists.listWithMultipleBlogs);
    assert.deepStrictEqual(result, {
      author: 'Edsger W. Dijkstra',
      likes: 17,
    });
  });
});
