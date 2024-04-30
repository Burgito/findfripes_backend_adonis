import AddressesService from '#services/addresses_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AddressesController {
  constructor(protected addressesService: AddressesService) {}
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await this.addressesService.getAllAddresses();
  }

  /**
   * Display form to create a new record
   */
  async cities({ request }: HttpContext) {
    return this.addressesService.getDistinctCitiesLike(request.all().city);
  }
}
