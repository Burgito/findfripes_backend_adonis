import { inject } from "@adonisjs/core";
import Address from "#models/address";
import LucidAddressesRepository from "../repositories/lucid/lucid_addresses_repository.js";

@inject()
export default class AddressesService {
    constructor(protected addressesRepo: LucidAddressesRepository) { }

    async getAllAddresses() {
        return await this.addressesRepo.all();
    }

    async createNewAddress(address: Address) {
        return await this.addressesRepo.create(address);
    }
}