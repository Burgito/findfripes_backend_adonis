import AddressesService from '#services/addresses_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AddressesController {
  constructor(protected addressesService: AddressesService) { }
  /**
   * Display form to create a new record
   */
  async cities({ request, view }: HttpContext) {
    const city = request.all().city
    const addresses = city
      ? (await this.addressesService.getDistinctCitiesLike(city.trim()))
      : (await this.addressesService.getAllAddressesLimitOrderByCity(30))
    return view.render('partials/cities', { 'addresses': addresses })
  }
}
