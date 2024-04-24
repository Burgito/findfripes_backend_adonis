import { inject } from "@adonisjs/core";
import LucidFripesRepository from "../repositories/lucid/lucid_fripes_repository.js";
import Fripe from "#models/fripe";

@inject()
export default class FripesService {
    constructor(protected fripesRepo: LucidFripesRepository) { }

    async getAllFripes() {
        return await this.fripesRepo.all();
    }

    async createNewFripe(fripe: Fripe) {
        return await this.fripesRepo.create(fripe);
    }
}