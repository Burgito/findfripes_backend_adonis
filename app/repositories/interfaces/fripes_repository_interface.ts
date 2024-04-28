import Fripe from "#models/fripe";

export default interface FripesRepositoryInterface {
    /** Retrieve all */
    all(): Promise<Fripe[]>

    /** Retrieve fripes by city */
    allByCity(city: string): Promise<Fripe[]>

    /** Retrieve one by id */
    one(id: number): Promise<Fripe>

    /** Create one */
    create(fripe: Fripe): Promise<Fripe>
}