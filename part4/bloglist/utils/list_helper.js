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

module.exports = { dummy, totalLikes, favoriteBlog };
