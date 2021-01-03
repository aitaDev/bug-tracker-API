const express = require('express');
const bugRouter = express.Router();

bugRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end('Will send all the bugs to you');
	})
	.post((req, res) => {
		res.end(
			`Will add the bug: ${req.body.name} with description: ${req.body.description}`
		);
	})
	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /bugs');
	})
	.delete((req, res) => {
		res.end('Deleting all bugs');
	});

bugRouter
	.route('/:bugId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send you details of the bug: ${req.params.bugId}`);
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on /bugs/${req.params.bugId}`);
	})
	.put((req, res) => {
		res.write(`Updating the bug: ${req.params.bugId}\n`);
		res.end(`Will update the bug: ${req.body.name}
			with description: ${req.body.description}`);
	})
	.delete((req, res) => {
		res.end(`Deleting bug: ${req.params.bugId}`);
	});

module.exports = bugRouter;
