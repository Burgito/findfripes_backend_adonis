/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FripesController from '#controllers/fripes_controller'
import HomeController from '#controllers/home_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

// Home
router.get('/', [HomeController, 'index'])

// Users
router.post('/register', [UsersController, 'register'])
router.post('/login', [UsersController, 'login'])

// Fripes
router.get('/fripes', [FripesController, 'index'])
router.get('/fripes/:id', [FripesController, 'show'])
router.post('/fripes', [FripesController, 'store'])
router.post('/fripes/:id/comment', [FripesController, 'comment'])
