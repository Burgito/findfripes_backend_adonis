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

  async index({ view }: HttpContext) {
    const fripes = await this.fripesService.getAllFripes(30)
    return view.render('pages/home', { fripes: fripes })
  }
}
