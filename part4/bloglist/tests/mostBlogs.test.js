const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');
const lists = require('./bloglistsDataForTesting');

describe('mostBlogs', () => {
  test('most cited author', () => {
    const result = listHelper.mostBlogs(lists.listWithMultipleBlogs);
    assert.deepStrictEqual(result, { author: 'Robert C. Martin', blogs: 3 });
  });
});
