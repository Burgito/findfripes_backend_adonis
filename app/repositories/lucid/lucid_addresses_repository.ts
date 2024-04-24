import Address from "#models/address";
import AddressesRepositoryInterface from "../interfaces/addresses_repository_interface.js";

export default class LucidAddressesRepository implements AddressesRepositoryInterface {

    async all(): Promise<Address[]> {
        return await Address.all();
    }

    async one(id: number): Promise<Address> {
        return await Address.findOrFail(id);
    }

    async create(address: Address): Promise<Address> {
        return await Address.create(address);
    }

}