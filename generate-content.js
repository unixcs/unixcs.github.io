const { join } = require('path');
const { existsSync } = require('fs');

module.exports = function(locals) {
  const posts = locals.posts;
  const config = this.config;
  
  const content = {
    meta: {
      title: config.title,
      subtitle: config.subtitle,
      description: config.description || '',
      author: config.author,
      url: config.url,
      root: config.root
    },
    pages: [],
    posts: posts.map(post => ({
      title: post.title,
      slug: post.slug,
      date: post.date.toISOString(),
      updated: post.updated ? post.updated.toISOString() : post.date.toISOString(),
      comments: true,
      path: post.path,
      link: '',
      permalink: post.permalink,
      excerpt: post.excerpt || '',
      text: post.content ? post.content.substring(0, 200) : '',
      categories: post.categories.data.map(c => ({ name: c.name, slug: c.slug, permalink: c.permalink })),
      tags: post.tags.data.map(t => ({ name: t.name, slug: t.slug, permalink: t.permalink }))
    })).reverse()
  };

  return {
    path: 'content.json',
    data: JSON.stringify(content, null, 2)
  };
};
