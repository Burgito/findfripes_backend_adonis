import Fripe from "#models/fripe";
import FripesRepositoryInterface from "../interfaces/fripes_repository_interface.js";

export default class LucidFripesRepository implements FripesRepositoryInterface {

    async all(): Promise<Fripe[]> {
        return await Fripe.all();
    }

    async one(id: number): Promise<Fripe> {
        return await Fripe.findOrFail(id);
    }

    async create(fripe: Fripe): Promise<Fripe> {
        return await Fripe.create(fripe);
    }

}