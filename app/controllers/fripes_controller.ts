import AddressesService from '#services/addresses_service';
import FripesService from '#services/fripes_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'
import Address from '#models/address';
import Fripe from '#models/fripe';

@inject()
export default class FripesController {
  constructor(protected fripesService: FripesService, protected addressesService: AddressesService) { }
  /**
   * Display a list of resource
   */
  async index() {
    return this.fripesService.getAllFripes();
  }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    // this.addressesService.createNewAddress(request.body().only('address') as Address)
    console.log(request);
    this.fripesService.createNewFripe(request.only(['fripe']).fripe)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) { }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }
}