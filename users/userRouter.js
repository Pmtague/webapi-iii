const express = require('express');
const userDB = require('./userDb.js');
const postDB = require('../posts/postDb.js')

const router = express.Router();

router.post('/', (req, res) => {
	const newUser = req.body;

	userDB.insert(newUser)
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ error: 'Error saving to the database' })
		})
});

router.post('/:id/posts', (req, res) => {
	const newPost = req.body;
	const postId = req.params.id;

	userDB.getById(postId)
		.then(user => {
			postDB.insert(newPost)
		})
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ error: 'Error saving to the database' })
		})
});

router.get('/', (req, res) => {
	userDB.get()
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json({ error: 'User info not found' })
		})
});

router.get('/:id', (req, res) => {
	const userId = req.params.id;

	userDB.getById(userId)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json({ error: 'User info not found' })
		})
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
