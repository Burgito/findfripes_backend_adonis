/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const FripesController = () => import('#controllers/fripes_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AddressesController = () => import('#controllers/addresses_controller')

// Users
router
  .group(() => {
    router.post('/register', [UsersController, 'register'])
    router.post('/login', [UsersController, 'login'])
    router.get('/current', [UsersController, 'current']).use(middleware.auth())
    router.get('/logout', [UsersController, 'logout']).use(middleware.auth())
  })
  .prefix('users')

router
  .group(() => {
    router.get('/', [AddressesController, 'cities'])
  })
  .prefix('addresses')

// Fripes
router
  .group(() => {
    router.get('/', [FripesController, 'getBy'])
    router.get('/:id', [FripesController, 'show'])
    router.post('/', [FripesController, 'store']).use(middleware.auth())
    router.post('/:id/comment', [FripesController, 'comment']).use(middleware.auth())
  })
  .prefix('fripes')
