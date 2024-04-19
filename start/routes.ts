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
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index'])
router.get('/fripes', [FripesController, 'index'])
