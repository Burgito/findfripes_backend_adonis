import AddressesService from '#services/addresses_service'
import FripesService from '#services/fripes_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class HomeController {
  constructor(
    protected addresseesService: AddressesService,
    protected fripesService: FripesService
  ) { }

  async index({ request, view }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 25

    const fripes = await this.fripesService.getAllFripes(page, limit)
    fripes.baseUrl('/')
    return view.render('pages/home', { fripes: fripes })
  }
}
