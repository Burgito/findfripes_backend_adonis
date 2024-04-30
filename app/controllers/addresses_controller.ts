import AddressesService from '#services/addresses_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AddressesController {
  constructor(protected addressesService: AddressesService) { }
  /**
   * Display form to create a new record
   */
  async cities({ request }: HttpContext) {
    const city = request.all().city
    return city ? this.addressesService.getDistinctCitiesLike(city) : []
  }
}
