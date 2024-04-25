import Fripe from "#models/fripe";
import FripesRepositoryInterface from "../interfaces/fripes_repository_interface.js";

export default class LucidFripesRepository implements FripesRepositoryInterface {

    async all(): Promise<Fripe[]> {
        const fripes = await Fripe.query().preload('address');
        return fripes;
    }

    async one(id: number): Promise<Fripe> {
        return await Fripe.query().where('id', id).preload('address').preload('comments').firstOrFail();
    }

    async create(fripe: Fripe): Promise<Fripe> {
        return await Fripe.create(fripe);
    }

}