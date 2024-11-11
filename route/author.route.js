const express = require('express')
const { createAuthor, getAuthors, getUserById, updateAuthorById, deleteAuthorById, signIn } = require('../controller/author.controller')
const hashPassword = require('../middleware/hashPassword')
const router = express.Router()

router.route('/').get(getAuthors).post(hashPassword,createAuthor)
router.route('/:Id').get(getUserById).patch(hashPassword,updateAuthorById).delete(deleteAuthorById)
router.route('/signin').post(signIn)

module.exports = router