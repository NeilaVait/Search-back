const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleDetailsSchema = new Schema({
  publishedAt: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model('article', articleDetailsSchema);

module.exports = Article;
