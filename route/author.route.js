const express = require('express')
const { createAuthor, getAuthors, getUserById, updateAuthorById, deleteAuthorById } = require('../controller/author.controller')

const router = express.Router()

router.route('/').get(getAuthors).post(createAuthor)
router.route('/:authorId').get(getUserById).patch(updateAuthorById).delete(deleteAuthorById)


module.exports = router