const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length > 0) {
    let sum = 0;
    blogs.map((blog) => {
      sum += blog.likes;
    });
    return sum;
  } else {
    return 0;
  }
};

const favoriteBlog = (blogs) => {
  let max = [];
  if (blogs.length === 0) {
    return {};
  } else {
    max.push(blogs[0]);
  }

  blogs.map((blog) => {
    if (blog.likes >= max[0].likes) {
      max = [blog];
    }
  });
  blogs.map((blog) => {
    if (blog.likes >= max[0].likes) {
      max = [blog];
    }
  });

  return max[0];
};

const mostBlogs = (blogs) => {
  let temp = 0;
  let author;
  const initialCount = _.countBy(blogs, 'author');
  Object.entries(initialCount).map((result) => {
    if (result[1] > temp) {
      temp = result[1];
      author = result;
    }
  });

  return {
    author: author[0],
    blogs: author[1],
  };
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs };
