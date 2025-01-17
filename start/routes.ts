/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
const FripesController = () => import('#controllers/fripes_controller')
const AddressesController = () => import('#controllers/addresses_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index'])
router.get('/fripes/:id', [FripesController, 'show'])
router.get('/cities', [AddressesController, 'cities'])
