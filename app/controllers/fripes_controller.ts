import AddressesService from '#services/addresses_service'
import FripesService from '#services/fripes_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class FripesController {
  constructor(
    protected fripesService: FripesService,
    protected addressesService: AddressesService
  ) { }

  async getBy({ request }: HttpContext) {
    if (request.all().city) return await this.fripesService.getFripesByCity(request.all().city)
    // TODO handle by name
    return await this.fripesService.getAllFripes()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    await this.fripesService.createNewFripe(
      request.only(['fripe']).fripe,
      request.only(['address']).address
    )
  }

  async comment({ auth, params, request }: HttpContext) {
    const user = auth.getUserOrFail()
    await this.fripesService.comment(user.id, params.id, request.only(['comment']).comment)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await this.fripesService.getOneFripe(params.id)
  }
}
