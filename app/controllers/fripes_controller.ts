import AddressesService from '#services/addresses_service';
import FripesService from '#services/fripes_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class FripesController {
  constructor(protected fripesService: FripesService, protected addressesService: AddressesService) { }
  /**
   * Display a list of resource
   */
  async index() {
    return await this.fripesService.getAllFripes();
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    await this.fripesService
      .createNewFripe(request.only(['fripe']).fripe, request.only(['address']).address)
  }

  async comment({ auth, params, request }: HttpContext) {
    const user = auth.getUserOrFail();
    await this.fripesService.
      comment(user.id, params.id, request.only(['comment']).comment)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await this.fripesService.getOneFripe(params.id);
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}