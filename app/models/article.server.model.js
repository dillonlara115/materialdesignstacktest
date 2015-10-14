'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	excerpt: {
		type: String,
		default: '',
		trim: true
	},
	themes: {
		type: Boolean
	},
	tutorials: {
		type: Boolean
	},
	blogpost: {
		type: Boolean
	},
	designResources: {
		type: Boolean
	},
	developmentResources: {
		type: Boolean
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Article', ArticleSchema);