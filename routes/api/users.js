const express = require ('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedin')

// POST - create (registers a user)
// POST - api/v1/users
router.post('/', usersCtrl.create)

// POST - login (login by authintacating user)
// POST - api/v1/users/login
router.post('/login', usersCtrl.login)

// GET - show (accessing specific user by id)
// GET - api/v1/users/:id
router.get('/:id', usersCtrl.show)

// PUT - update (updates user info)
// PUT - api/v1/users/:id
router.put('/:id', usersCtrl.update)

// User favorites
// GET /api/v1/users/:id/favorites
router.get('/:id/favorites', usersCtrl.getFavorites)

module.exports = router