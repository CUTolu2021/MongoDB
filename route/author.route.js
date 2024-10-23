const express = require('express')
const { createAuthor, getAuthors, getUserById, updateAuthorById, deleteAuthorById } = require('../controller/author.controller')


const router = express.Router()

router.route('/').post(createAuthor).get(getAuthors)
router.route('/:authorId').get(getUserById).patch(updateAuthorById).delete(deleteAuthorById)


module.exports = router