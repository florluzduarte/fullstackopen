const { test, describe } = require('node:test');
const assert = require('node:assert');
const listHelper = require('../utils/list_helper');
const lists = require('./bloglistsDataForTesting');

describe('totalLikes', () => {
  test('of empty list equal zero', () => {
    const blogs = [];
    const result = listHelper.totalLikes(blogs);
    assert.strictEqual(result, 0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(lists.listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(lists.listWithMultipleBlogs);
    assert.strictEqual(result, 36);
  });
});
