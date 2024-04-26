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
import { middleware } from './kernel.js'

// Home
router.get('/', [HomeController, 'index'])

// Users
router.group(() => {
    router.post('/register', [UsersController, 'register'])
    router.post('/login', [UsersController, 'login'])
    router.get('/current', [UsersController, 'current']).use(middleware.auth())
    router.get('/logout', [UsersController, 'logout']).use(middleware.auth())
}).prefix('users')

// Fripes
router.group(() => {
    router.get('/', [FripesController, 'index'])
    router.get('/:id', [FripesController, 'show'])
    router.post('/', [FripesController, 'store']).use(middleware.auth())
    router.post('/:id/comment', [FripesController, 'comment']).use(middleware.auth())
}).prefix('fripes')
