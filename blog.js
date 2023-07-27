const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	title: String,
	body: String,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
